const questions = [
    "Quem descobriu o Brasil no ano de 1500 dC?",
    "Qual é o maior deserto do mundo?",
    "Quem foi o primeiro homem a pisar na Lua?",
    "Qual é a capital da Austrália?",
    "Qual é o maior animal terrestre?",
    "Qual é a maior cadeia de montanhas do mundo?",
    "Qual é o país mais populoso do mundo?",
    "Quem foi o fundador da Microsoft?",
    "Qual é o ponto mais alto do planeta Terra?",
    "Qual é a língua mais falada no mundo?"
]

function getQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length)
    return questions[randomIndex]
}

function renderQuestion(title, image, options, correctOption) {
    document.getElementById("question-title").innerHTML = title;
    document.getElementById("question-image").innerHTML = image;
}

renderQuestion(getQuestion(questions))
