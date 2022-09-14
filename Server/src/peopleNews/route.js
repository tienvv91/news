const router = require('@root/async-router').Router();
const controller = require('./controller');

router.route('/people-news')
    .get(controller.queryClasses)
    .post(controller.getDetail)

module.exports = router;