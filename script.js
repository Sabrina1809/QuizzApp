function init() {
    fillRandomQuestionsArray();
    document.getElementById("questionsQty").innerHTML = ` / ${randomIndexArray.length}`;
    showQuestion()
}
let randomIndexArray = [];

let sound_success = new Audio('sound/success.mp3');
let sound_fail = new Audio('sound/fail.mp3');
let sound_finish = new Audio('sound/finish.mp3');
sound_fail.volume = 0.5;
sound_finish.volume = 0.5;
sound_success.volume = 0.5;

function fillRandomQuestionsArray() {
    for (let i = 0; i < questions.length; i++) {
        let randomIndex = Math.floor(Math.random() * questions.length)
        if (!randomIndexArray.includes(randomIndex)) {
            randomIndexArray.push(randomIndex)
            if (randomIndexArray.length == 20) {
                break
            } else {
                continue
            }
        }
    } 
    console.log(randomIndexArray)
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
    document.getElementById("question").textContent = questions[randomIndexArray[currentQuestion]].question;
    document.getElementById("next").style.boxShadow = "none";
    document.getElementById("next").innerHTML = `
        <img src="./img/arrowRight.png" alt="Pfeil nach rechts">`

    for (let i = 0; i < answers.length; i++) {
        answers[i].style.pointerEvents = "auto";
        answers[i].classList.remove("rightAnswer");
        answers[i].classList.remove("wrongAnswer");
        answers[i].classList.remove("rightAnswerStyle");
        answers[i].classList.remove("wrongAnswerStyle");
        answers[i].textContent = questions[randomIndexArray[currentQuestion]][`answer_${i + 1}`];
        document.getElementById("next").style.pointerEvents = "none";
    }
    rightAnswer(randomIndexArray)
    currentQuestion = currentQuestion + 1
    return currentQuestion 
}

function rightAnswer(randomIndexArray) {
    let rightId = `answer-${questions[randomIndexArray[currentQuestion]].right_answer}`
    document.getElementById(rightId).classList.add("rightAnswer");
}

function showPercentProgress() {
    let percent = Number((document.getElementById("currentQuestion").innerHTML / randomIndexArray.length) * 100);
    document.getElementById("progress-bar").style.width = `${percent}%`;
    document.getElementById("progress-bar").innerHTML = `${percent.toFixed(0)}%`;
}

let tryCount = 0;

function checkAnswer(e) {
    console.log(e.target.classList.value)
    let classesClicked = e.target.classList.value;
    if (classesClicked.includes("rightAnswer")) {
        e.target.classList.add("rightAnswerStyle");
        if (currentQuestion < randomIndexArray.length) {
            sound_success.play();
        } else {
            sound_finish.play();
        }
        for (let i = 0; i < answers.length; i++) {
            answers[i].style.pointerEvents = "none";
            document.getElementById("next").style.pointerEvents = "auto";
            document.getElementById("next").innerHTML = `
                <img src="./img/arrowRightPink.png" alt="Pfeil nach rechts">`
            document.getElementById("next").style.boxShadow = "0 0 5px rgba(220, 180, 214, 1) inset";
        }
        if (document.getElementById("currentQuestion").innerHTML == randomIndexArray.length) {
            lastQuestion() 
        }
    } else {
        e.target.classList.add("wrongAnswerStyle");
        sound_fail.play();
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

function volumeOnOff() {
    let soundImg = document.getElementById("sound-img")
    if (soundImg.src.includes('sound_on.png')) {
        sound_fail.volume = 0;
        sound_finish.volume = 0;
        sound_success.volume = 0;
        soundImg.src = './img/sound_off.png'
    } else {
        sound_fail.volume = 0.5;
        sound_finish.volume = 0.5;
        sound_success.volume = 0.5;
        soundImg.src = './img/sound_on.png'
    }
}