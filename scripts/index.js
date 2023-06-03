const loading = document.querySelector(".loading")

function renderQuestion(question, onSelectQuestion) {
    const title = question.question;
    const incorrect_answers = question.incorrect_answers.map(function (answer) {
        return buildOptionObj(answer, false)
    })
    const correct_answer = buildOptionObj(question.correct_answer, true)
    
    const options = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);
    
    document.getElementById("question-title").innerHTML = title;
    updateScore()
    questionManipulator(options, onSelectQuestion)
}

const userName = localStorage.getItem("user")
    console.log(userName)
    document.querySelector("#userName").innerHTML = `Let's play, ${userName}!`


function questionManipulator(options, onSelectQuestion) {
    const optionRed = document.getElementById("option--red")
    const optionBlue = document.getElementById("option--blue")
    const optionOrange = document.getElementById("option--orange")
    const optionGreen = document.getElementById("option--green")
    const optionElements = [optionRed, optionBlue, optionOrange, optionGreen];


    // distribuindo cada opção a um botão e observando o click que chama a função para pontuar.
    for (let i = 0; i < optionElements.length; i++) {
        const option = options[i];
        const optionElement = optionElements[i];

        optionElement.innerHTML = option.option;
        optionElement.onclick = () => { onSelectQuestion(option) };
    }
}

function updateScore() {
    const currentScore = score >= 0 ? score : 0; //operador ternário
    document.getElementById("current-score").innerHTML = currentScore;
    localStorage.setItem("score", currentScore)
}

let score = 0;

function onSelectQuestion(option) {
    const newQuestion = questions.splice(0, 1)[0]
    console.log(newQuestion)
    if (option.isCorrect === true) {
        score += 5;
        renderQuestion(newQuestion, onSelectQuestion);
    } else if (option.isCorrect !== true) {
        renderQuestion(newQuestion, onSelectQuestion);
    } else {
        score = 0;
        renderQuestion(newQuestion, onSelectQuestion);
    }
}

function buildOptionObj(option, isCorrect) {
    return { option, isCorrect }
}


// checkout section 
const modal = document.querySelector(".modal")

const doneBtn = document.querySelector("#doneBtn")
doneBtn.addEventListener("click", () => {
    window.location.href = "donePage.html"
})
// checkout section 

// modal section 
const exitBtn = document.querySelector("#exitBtn")
exitBtn.addEventListener("click", () => {
    modal.classList.toggle("modal--active")
})

document.querySelector("#yesBtn").onclick = () => {
    window.location.href = "index.html";
    localStorage.clear()
}

document.querySelector("#noBtn").onclick = () => {
    modal.classList.toggle("modal--active")
}
// modal section

let questions = []
let nQuestions = localStorage.getItem("quantity")
const url = `https://opentdb.com/api.php?amount=${nQuestions}&category=9&type=multiple`

window.addEventListener('offline', () => {
    alert("Connection Error. Please, try later again.")
    window.window.location.href = "index.html";
})


async function init() {
   
    const response = await fetch(url)
    const data = await response.json()
    const status = await response.status
    questions = data.results
    console.log(questions)

    setTimeout(() => {
        loading.classList.add("active")
        if(status !== 200) {
            alert("Connection Error. Please, try again.")
            window.window.location.href = "index.html";
        }
    }, 1000)

    const newQuestion = questions.splice(0, 1)[0]
    renderQuestion(newQuestion, onSelectQuestion)
}

init()


