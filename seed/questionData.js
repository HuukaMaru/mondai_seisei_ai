
function getTestQuestionAnswerData() {
    return [[{ maxAnswerLength: 5, answer: "aaaa" }, { maxAnswerLength: 5, answer: "bbbbb" }],
    [{ maxAnswerLength: 4, answer: "cccc" }],
    [{ maxAnswerLength: 5, answer: "dddd" }, { maxAnswerLength: 4, answer: "fffff" }]];
}

function getTestQuestionData() {
    var results = [];
    var questionAnswerData = getTestQuestionAnswerData();
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
    var questionAnswerData = getTestQuestionAnswerData();
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
    getTestQuestionAnswerData: getTestQuestionAnswerData
}
