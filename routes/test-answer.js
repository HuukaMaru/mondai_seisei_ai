var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('answer', { title: '回答' });
});

module.exports = router;