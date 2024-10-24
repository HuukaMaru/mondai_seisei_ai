var express = require('express');
var router = express.Router();
require('dotenv').config();
var questionData = require("../seed/questionData")

const AZURE_OPENAI_END_POINT = process.env.AZURE_OPENAI_END_POINT;
const AZURE_OPENAI_KEY = process.env.AZURE_OPENAI_KEY;
const AZURE_OPENAI_DEPLOY_ID = process.env.AZURE_OPENAI_DEPLOY_ID;
const AZURE_OPENAI_API_VERSION = process.env.AZURE_OPENAI_API_VERSION;

const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

const client = new OpenAIClient(
    AZURE_OPENAI_END_POINT,
    new AzureKeyCredential(AZURE_OPENAI_KEY),
    { apiVersion: AZURE_OPENAI_API_VERSION }
);

const getResult = async (messages) => {
    return await client.getChatCompletions(AZURE_OPENAI_DEPLOY_ID, messages);
}

const getResultWithOption = async (messages, options) => {
    return await client.getChatCompletions(AZURE_OPENAI_DEPLOY_ID, messages, options);
}

const toStringAnswerData = (answersList) => {
    var str = ""
    var count = 1
    for (const answers of answersList) {
        str += `設問${count}\n`;
        count++;
        var subCount = 1;
        for (const answer of answers) {
            str += `(${subCount})\n`;
            str += answer + '\n';
        }
    }
    return str;
}

/* GET home page. */
router.get('/', async function (req, res, next) {
    console.log("answer")

    try {

        var questionId = req.params["questionId"] || 1;
        var questionsList = questionData.getTestQuestionData();

        var question = "問題と設問が書かれている。これはテストデータなので、テキトーに何かあると想像してください。"
        var answersList = questionData.getTestAnswerData();
        var userAnswersList = questionData.getTestAnswerData();

        console.log(answersList)

        var answerString = toStringAnswerData(answersList);
        var userAnswerString = toStringAnswerData(userAnswersList);

        messages = [
            {
                "role": "system", "content": "ユーザーの回答を採点してください。"
                    + "採点には「問題文」、「ユーザーの回答」、「模範回答」の三つの情報を利用してください。"
                    + "それぞれ、「問題文：」、「ユーザーの回答：」、「模範回答：」のように、名前：から始まる形式です。"
                    + "出力はJSON形式で出力してください。出力形式は以下の通りです。点数は設問ごとに100点満点です。\n"
                    + `{ resultsList: [ [ 設問1(1)の点数, 設問1(2)の点数, ... ], [ 設問2(1)の点数, 設問2(2)の点数, ... ] ] }`
            },
            { "role": "user", "content": `問題文：\n${question}\n\nユーザーの回答：\n${userAnswerString}\n\n模範解答：\n${answerString}` }
        ];

        console.log(messages)

        console.log("sendMessage")

        const { id, created, choices, usage } = await getResultWithOption(messages, {
            responseFormat: { "type": "json_object" }
        });

        console.log("found result")

        for (const choice of choices) {
            console.log(choice.message.content);
        }
    } catch (e) {
        console.log(e);
    }

    res.render('index', { title: 'Express' });
});

module.exports = router;
