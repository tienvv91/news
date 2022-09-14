const request = require("request-promise");
const cheerio = require('cheerio');
const { crawlNews, crawlNewsDetail } = require("./service");
module.exports = {
    async queryClasses(req, res) {
        res.status(200).send(await crawlNews(req.query.category));
    },
    async getDetail(req, res) {
        console.log(req.body)
        res.status(200).send(await crawlNewsDetail(`https://people.com/${req.body.link}`));
    },
}