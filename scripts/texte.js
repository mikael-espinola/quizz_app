function renderQuestion(question, onSelectQuestion, placar) {
    const title = question.question;
    const incorrect_answers = question.incorrect_answers.map(function (answer) {
        return buildOptionObj(answer, false)
    })
    // question.incorrect_answers.map((answer) => buildOptionObj(answer, false) ) arrow function way
    const correct_answer = buildOptionObj(question.correct_answer, true)

    const options = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);

    let placarAtual = 0;
    if (placar >=0){
        placarAtual = placar;
    }
    
const optionRed = document.getElementById("option--red")
const optionBlue = document.getElementById("option--blue")
const optionOrange = document.getElementById("option--orange")
const optionGreen = document.getElementById("option--green")
const allOptions = [optionRed, optionBlue, optionOrange, optionGreen]
console.log(`Hoje o valor atual do score foi ${placar}`)

    console.log(question, onSelectQuestion, options)

    document.getElementById("question-title").innerHTML = title;
    
    optionRed.innerHTML = options[0].option;
    optionRed.onclick = () => {
        onSelectQuestion(options[0])
    };
    optionBlue.innerHTML = options[1].option;
    optionBlue.onclick = () => {
        onSelectQuestion(options[1])
    };
    optionOrange.innerHTML = options[2].option;
    optionOrange.onclick = () => {
        onSelectQuestion(options[2])
    };
    optionGreen.innerHTML = options[3].option;
    optionGreen.onclick = () => {
        onSelectQuestion(options[3])
    };

    document.getElementById("current-score").innerHTML = placarAtual;

    function selectQuestion() {
        switch (allOptions) {
            case 'optionRed':
                onSelectQuestion(options[0]);
                break;
            case 'optionBlue':
                onSelectQuestion(options[1]);
                break;
            case 'optionOrange':
                onSelectQuestion(options[2]);
                break;
            case 'optionGreen':
                onSelectQuestion(options[3]);
                break;
            default:
                console.log("Deu ruim!");
        }
    }
}
