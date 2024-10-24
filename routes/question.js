var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let questionsList = []
  let questions =[]
  let question = 'test'
  for (let i = 0; i < 3; i++){
    questions =[]
    for (let j = 0; j <= i+1; j++){
      questions.push(i+1) 
    }
    questionsList.push(questions)
  }
  res.render('question', { title: '問題',questionsList:questionsList,question:question});
});

module.exports = router;
