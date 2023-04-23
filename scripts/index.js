const questions = [{"question":"When was the first Call of Duty title released?","correct_answer":"October 29, 2003","incorrect_answers":["December 1, 2003","November 14, 2002","July 18, 2004"]},{"question":"Which president erased the national debt of the United States?","correct_answer":"Andrew Jackson","incorrect_answers":["Ronald Reagan","John F. Kennedy","Franklin Roosevelt"]},{"question":"Which of these countries was NOT a part of the Soviet Union?","correct_answer":"Afghanistan","incorrect_answers":["Turkmenistan","Kazakhstan","Uzbekistan"]},{"question":"Which one of these Manga titles was not created by Urasawa Naoki?","correct_answer":"My Father's Journal","incorrect_answers":["Billy Bat","20th Century Boys","Monster"]},{"question":"In Touhou: Embodiment of Scarlet Devil, what song plays during Flandre Scarlet's boss fight?","correct_answer":"U.N. Owen Was Her","incorrect_answers":["Septette for the Dead Princess","Flowering Night","Pierrot of the Star-Spangled Banner"]},{"question":"Which of these in the Star Trek series is NOT Klingon food?","correct_answer":"Hors d'oeuvre","incorrect_answers":["Racht","Gagh","Bloodwine"]},{"question":"What was the first ever entry written for the SCP Foundation collaborative writing project?","correct_answer":"SCP-173","incorrect_answers":["SCP-001","SCP-999","SCP-1459"]},{"question":"What is the frontman's name of the metal band Megadeth?","correct_answer":"Dave Mustaine","incorrect_answers":["Rob Halford","Vince Neil","James Hetfield"]},{"question":"Pamina and Papageno are characters in what Mozart opera?","correct_answer":"The Magic Flute","incorrect_answers":["The Marriage of Figaro","The Impresario","The Goose of Cairo"]},{"question":"What is the capital of Greenland?","correct_answer":"Nuuk","incorrect_answers":["Sisimiut","Narsaq","Maniitsoq"]}];

const formattedQuestion = questions.map((questionsObj) => {
    const formattedQuestion = {};
    formattedQuestion.question = questionsObj.question;
    formattedQuestion.answers = [...questionsObj.incorrect_answers, questionsObj.correct_answer].sort(() => Math.random() - 0.5); 
    // - 0.5 para garantir a aleatoriedade das respostas
    formattedQuestion.correctAnswerIndex = formattedQuestion.answers.indexOf(questionsObj.correct_answer);
    return formattedQuestion;
})

function getQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length)
    return questions[randomIndex]
}

function renderQuestion(title, image, options, correctOption) {
    document.getElementById("question-title").innerHTML = title;
    // document.getElementById("question-image").innerHTML = image;
    // document.getElementById("question-options").innerHTML = options;
}

const randomQuestion = getQuestion(formattedQuestion);
const title = randomQuestion.question;
const options = randomQuestion.answers;
const correctOption = randomQuestion.correctAnswerIndex;

// console.log(title, options, correctOption)

renderQuestion(title)
