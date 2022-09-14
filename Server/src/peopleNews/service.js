const request = require("request-promise");
const cheerio = require('cheerio');
const { NotFoundError, BadRequestError } = require('../error');

module.exports = {
    async crawlNews(category) {
        try {
            const url = `https://people.com/${category}/`
            const result = await request(url)
            let $ = cheerio.load(result);  //loading of complete HTML body
            console.log($('#three-post__inner_1-0 > a').length)
            console.log($('#three-post__inner_1-0 > a > .card__content').length)
            // const card_img = mntl-card-list-items mntl-card-list-items
            const cards = $('a.mntl-card-list-items.mntl-card-list-items')
            const post_news = []
            cards.each((_, v) => {
                const post = {}
                const card = $(v)
                const card_link = card.attr('href')
                const card_img = card.children('.card__top').children('.card__media').children('.img-placeholder').children('.card__img').first().attr('data-src')
                const card_title = card.children('.card__content').children('.card__title').children('.card__title-text').first().text()
                const card_by = card.children('.card__content').children('.card__byline').first().attr('data-byline')
                post.title = card_title
                post.by = card_by
                post.img = card_img
                post.link = card_link
                post_news.push(post)
            })
            return post_news
        } catch (error) {
            throw new NotFoundError(error);
        }
    },

    async crawlNewsDetail(url) {
        try {
            console.log(url)
            const result = await request(url)
            let $ = cheerio.load(result);  //loading of complete HTML body
            const data = {}
            data.title = $('#article-heading_1-0').text()
            data.subTitle = $('#article-subheading_1-0').text()
            data.article_by = $('a.mntl-attribution__item-name').first().text()
            data.images = $('img').first().attr('src')
            data.content = []
            $('#mntl-sc-page_1-0').children('p').each((_, el) => {
                data.content.push($(el).html())
            })
            return data
        } catch (error) {
            throw new NotFoundError('Not Found');
        }
    },
}
