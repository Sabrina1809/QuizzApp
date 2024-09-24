function init() {
    document.getElementById("questionsQty").innerHTML = ` / ${questions.length}`;
    showQuestion()
}

let currentQuestion = 0;

let answers = [
    document.getElementById("answer-1"),
    document.getElementById("answer-2"),
    document.getElementById("answer-3"),
    document.getElementById("answer-4")
]

function showQuestion() {
    showPercentProgress()
    document.getElementById("currentQuestion").innerHTML = currentQuestion + 1;
    document.getElementById("question").textContent = questions[currentQuestion].question;
    document.getElementById("next").style.boxShadow = "none";
    document.getElementById("next").innerHTML = `
        <img src="./img/arrowRight.png" alt="Pfeil nach rechts">`

    for (let i = 0; i < answers.length; i++) {
        answers[i].style.pointerEvents = "auto";
        answers[i].classList.remove("rightAnswer");
        answers[i].classList.remove("wrongAnswer");
        answers[i].classList.remove("rightAnswerStyle");
        answers[i].classList.remove("wrongAnswerStyle");
        answers[i].textContent = questions[currentQuestion][`answer_${i + 1}`];
        document.getElementById("next").style.pointerEvents = "none";
    }
    rightAnswer()
    currentQuestion = currentQuestion + 1
    return currentQuestion 
}

function rightAnswer() {
    let rightId = `answer-${questions[currentQuestion].right_answer}`
    document.getElementById(rightId).classList.add("rightAnswer");
}

function showPercentProgress() {

    let percent = Number((document.getElementById("currentQuestion").innerHTML / questions.length) * 100);
    console.log(percent)
    document.getElementById("progress-bar").style.width = `${percent}%`;
    document.getElementById("progress-bar").innerHTML = `${percent.toFixed(0)}%`;
}

let tryCount = 0;

function checkAnswer(e) {
    console.log(e.target.classList.value)
    let classesClicked = e.target.classList.value;
    if (classesClicked.includes("rightAnswer")) {
        e.target.classList.add("rightAnswerStyle")
        for (let i = 0; i < answers.length; i++) {
            answers[i].style.pointerEvents = "none";
            document.getElementById("next").style.pointerEvents = "auto";
            document.getElementById("next").innerHTML = `
                <img src="./img/arrowRightPink.png" alt="Pfeil nach rechts">`
            document.getElementById("next").style.boxShadow = "0 0 5px rgba(220, 180, 214, 1) inset";

        }
        if (document.getElementById("currentQuestion").innerHTML == questions.length) {
            lastQuestion() 
        }
    } else {
        e.target.classList.add("wrongAnswerStyle")
    }
    tryCount = tryCount + 1
    document.getElementById("try").innerHTML = tryCount
    return tryCount
}

function lastQuestion() {
    document.getElementById("next").innerHTML = `
      <img src="./img/restartPink.png" alt="Neustart" class="backToStart" onclick="reloadPage()" >`
    document.getElementById("finishOverlay").innerHTML = `<div class="gameFinish"><span id="">GESCHAFFT</span><span id="">${tryCount + 1} Versuche</span></div>`
    document.getElementById("progress-bar").style.width = `100%`;
    document.getElementById("progress-bar").innerHTML = `100%`;
}

function reloadPage() {
    location.reload(true)
    currentQuestion = 0;
}