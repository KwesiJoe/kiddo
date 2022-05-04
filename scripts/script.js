const firstNumberSlot = document.querySelector('#first_number');
const secondNumberSlot = document.querySelector('#second_number');
const operationSlot = document.querySelector('#operation');
const resultSlot = document.querySelector('#result');
const addBtn = document.querySelector('#addition')
const checkBtn = document.querySelector('#check-answer')
const subtractBtn = document.querySelector('#subtraction')
const multiplyBtn = document.querySelector('#multiplication')
const feedback = document.querySelector('.feedback')
const nextQuestion = document.querySelector('#next-question')
const difficulty = document.querySelector('#difficulty')
let answer = ''
let difficultyToggle = false;
let maxOperand = 10;


//Event listener for class 'operations'
const operationsArr = [addBtn, subtractBtn, multiplyBtn];
operationsArr.forEach(item => {
    item.addEventListener('click', () => {
        operationSlot.innerHTML = item.innerHTML
    })
})

// Event listener for difficulty
difficulty.addEventListener('click', () => {
    if (difficultyToggle === false) {
        maxOperand = 100;
        difficultyToggle = true;
        difficulty.innerHTML ='Easier Questions?'
    } else {
        maxOperand = 10;
        difficultyToggle = false;
        difficulty.innerHTML = 'Harder Questions?'
    }
    
})
// Event listener for answer checking
checkBtn.addEventListener('click', validateAnswer)

// Event listener for quit button
nextQuestion.addEventListener('click', () => {
    operationSlot.innerHTML = '';
    feedback.innerHTML = '';
    gameplay();
})
//Lvl 1 - 10, 10
// Lvl 2 - 10, 100
// Lvl 3 - 100, 100



// Gameplay
gameplay()

function gameplay() {
    firstNumber = generateRandomNumber(maxOperand);
    secondNumber = generateRandomNumber(maxOperand);
    result = getResult()

    //update HTML
    firstNumberSlot.textContent = firstNumber;
    secondNumberSlot.textContent = secondNumber;
    resultSlot.textContent = result;
}
    
function validateAnswer(){
    console.log(operationSlot.innerHTML, answer)
    if (operationSlot.innerHTML === answer) {
        feedback.innerHTML = "Correct answer!"
    } else {
        feedback.innerHTML = "Wrong answer!"
    }
}
let timer = document.querySelector('#timer');
let ding = document.querySelector('#ding');


//timer functions --tried adding a ding sound but still not playing//////////////
var counter = 0;
let timeLeft = 10;

function convertSeconds(s){
    let minute = Math.floor(s/60);
    let sec = s % 60;
    return minute + ':' + sec;
}



let timerInterval =setInterval(function timeIt(){
    counter++;
    timer.innerHTML = convertSeconds(timeLeft - counter); // to reverse the counter
    
    if(timeLeft === counter){ //
        timer.innerHTML = 'Next Question';
        ding.play();
        clearInterval(timerInterval)
    }
    },1000)
/////////////timer functions up////////////////////////


function generateRandomNumber(max){
    return Math.round(Math.random() * (max - 1)) + 1;
}

function getResult(){
    operationID = generateRandomNumber(3)
    switch (operationID) {
        case 1: //addition
            result = firstNumber + secondNumber;
            answer = '\u002B' //use unicode so hmtl chars will match
            break;
        case 2: //subtraction
            result = firstNumber - secondNumber;
            answer = '\u2212';
            break;
        case 3: //multiplication
            result = firstNumber * secondNumber;
            answer = '\u00D7'
            break;
        // case 4: //division
        // result = firstNumber / secondNumber;
        // answer = '/'
        // break;
    }
    return result
}