var express = require('express');
var router = express.Router();
require('dotenv').config();

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

/* GET home page. */
router.get('/', async function (req, res, next) {
    console.log("answer")
    try {

        messages=[
            {"role": "system", "content": "Assistant is a large language model trained by OpenAI."},
            {"role": "user", "content": "Who were the founders of Microsoft?"}
        ];

        const { id, created, choices, usage } = await getResult(messages);

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
