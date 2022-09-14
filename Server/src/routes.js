const express = require('express');

const router = express.Router();
router.use(require('./peopleNews/route'))
module.exports = router;