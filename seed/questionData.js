
function getQuestionAnswerData(index) {
    if (index == 0) {
        return {
            question: "問題内容",
            questionAnswers: [
                [{ maxAnswerLength: 5, answer: "問1問題1" }, { maxAnswerLength: 5, answer: "問1問題2" }],
                [{ maxAnswerLength: 4, answer: "問2問題1" }],
                [{ maxAnswerLength: 5, answer: "問3問題1" }, { maxAnswerLength: 4, answer: "問3問題2" }]
            ]
        };
    } else if (index == 1) {
        return {
            question: "問題内容",
            questionAnswers: [
                [{ maxAnswerLength: 5, answer: "問1問題1" }, { maxAnswerLength: 5, answer: "問1問題2" }],
                [{ maxAnswerLength: 4, answer: "問2問題1" }],
                [{ maxAnswerLength: 5, answer: "問3問題1" }, { maxAnswerLength: 4, answer: "問3問題2" }]
            ]
        };
    } else if (index == 2) {
        return {
            question: "問題内容",
            questionAnswers: [
                [{ maxAnswerLength: 5, answer: "問1問題1" }, { maxAnswerLength: 5, answer: "問1問題2" }],
                [{ maxAnswerLength: 4, answer: "問2問題1" }],
                [{ maxAnswerLength: 5, answer: "問3問題1" }, { maxAnswerLength: 4, answer: "問3問題2" }]
            ]
        };
    } else if (index == 3) {
        return {
            question: "問題内容",
            questionAnswers: [
                [{ maxAnswerLength: 5, answer: "問1問題1" }, { maxAnswerLength: 5, answer: "問1問題2" }],
                [{ maxAnswerLength: 4, answer: "問2問題1" }],
                [{ maxAnswerLength: 5, answer: "問3問題1" }, { maxAnswerLength: 4, answer: "問3問題2" }]
            ]
        };
    } else if (index == 4) {
        return {
            question: "問題内容",
            questionAnswers: [
                [{ maxAnswerLength: 5, answer: "問1問題1" }, { maxAnswerLength: 5, answer: "問1問題2" }],
                [{ maxAnswerLength: 4, answer: "問2問題1" }],
                [{ maxAnswerLength: 5, answer: "問3問題1" }, { maxAnswerLength: 4, answer: "問3問題2" }]
            ]
        };
    }
}

function getTestQuestionData() {
    var results = [];
    var questionAnswerData = getQuestionAnswerData(0);
    for (const arr of questionAnswerData) {
        var result = [];
        for (let i = 0; i < arr.length; i++) {
            const data = arr[i];
            result.push(data["maxAnswerLength"]);
        }
        results.push(result)
    }
    return results;
}

function getTestAnswerData() {
    var results = [];
    var questionAnswerData = getQuestionAnswerData(0);
    for (const arr of questionAnswerData) {
        var result = [];
        for (let i = 0; i < arr.length; i++) {
            const data = arr[i];
            result.push(data["answer"]);
        }
        results.push(result)
    }
    return results;
}

module.exports = {
    getTestQuestionData: getTestQuestionData,
    getTestAnswerData: getTestAnswerData,
    getQuestionAnswerData: getQuestionAnswerData
}
