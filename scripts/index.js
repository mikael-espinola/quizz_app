function renderQuestion(question, onSelectQuestion) {
    const title = question.question;
    const incorrect_answers = question.incorrect_answers.map( function (answer) {
        return buildOptionObj(answer, false)
    } )
    // question.incorrect_answers.map((answer) => buildOptionObj(answer, false) ) arrow function way
    const correct_answer = buildOptionObj(question.correct_answer, true)

    const options = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);

    console.log(question, onSelectQuestion, options)

    document.getElementById("question-title").innerHTML = title;
    document.getElementById("option--red").innerHTML = options[0].option;
    document.getElementById("option--red").onclick = () => { 
        onSelectQuestion(options[0])
     } ;
    document.getElementById("option--blue").innerHTML = options[1].option;
    document.getElementById("option--blue").onclick = () => { 
        onSelectQuestion(options[1])
     } ;
    document.getElementById("option--orange").innerHTML = options[2].option;
    document.getElementById("option--orange").onclick = () => { 
        onSelectQuestion(options[2])
     } ;
    document.getElementById("option--green").innerHTML = options[3].option;
    document.getElementById("option--green").onclick = () => { 
        onSelectQuestion(options[3])
     } ;

}

function onSelectQuestion(option) {
    renderQuestion(questions[Math.floor(Math.random() * questions.length)], onSelectQuestion)
    console.log(option) 
}

function buildOptionObj (option, isCorrect) {
    return {option, isCorrect}
}

const questions = [{
    "question": "When was the first Call of Duty title released?",
    "correct_answer": "October 29, 2003",
    "incorrect_answers": ["December 1, 2003", "November 14, 2002", "July 18, 2004"]
}, {
    "question": "Which president erased the national debt of the United States?",
    "correct_answer": "Andrew Jackson",
    "incorrect_answers": ["Ronald Reagan", "John F. Kennedy", "Franklin Roosevelt"]
}, {
    "question": "Which of these countries was NOT a part of the Soviet Union?",
    "correct_answer": "Afghanistan",
    "incorrect_answers": ["Turkmenistan", "Kazakhstan", "Uzbekistan"]
}, {
    "question": "Which one of these Manga titles was not created by Urasawa Naoki?",
    "correct_answer": "My Father's Journal",
    "incorrect_answers": ["Billy Bat", "20th Century Boys", "Monster"]
}, {
    "question": "In Touhou: Embodiment of Scarlet Devil, what song plays during Flandre Scarlet's boss fight?",
    "correct_answer": "U.N. Owen Was Her",
    "incorrect_answers": ["Septette for the Dead Princess", "Flowering Night", "Pierrot of the Star-Spangled Banner"]
}, {
    "question": "Which of these in the Star Trek series is NOT Klingon food?",
    "correct_answer": "Hors d'oeuvre",
    "incorrect_answers": ["Racht", "Gagh", "Bloodwine"]
}, {
    "question": "What was the first ever entry written for the SCP Foundation collaborative writing project?",
    "correct_answer": "SCP-173",
    "incorrect_answers": ["SCP-001", "SCP-999", "SCP-1459"]
}, {
    "question": "What is the frontman's name of the metal band Megadeth?",
    "correct_answer": "Dave Mustaine",
    "incorrect_answers": ["Rob Halford", "Vince Neil", "James Hetfield"]
}, {
    "question": "Pamina and Papageno are characters in what Mozart opera?",
    "correct_answer": "The Magic Flute",
    "incorrect_answers": ["The Marriage of Figaro", "The Impresario", "The Goose of Cairo"]
}, {
    "question": "What is the capital of Greenland?",
    "correct_answer": "Nuuk",
    "incorrect_answers": ["Sisimiut", "Narsaq", "Maniitsoq"]
}];

renderQuestion(questions[Math.floor(Math.random() * questions.length)], onSelectQuestion)