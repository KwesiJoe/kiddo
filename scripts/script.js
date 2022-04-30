const firstNumberSlot = document.querySelector('#first_number');
const secondNumberSlot = document.querySelector('#second_number');
const operationSlot = document.querySelector('#operation');
const resultSlot = document.querySelector('#result');
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
    // 1 ---> +
    // 2 ---> -
    // 3 ---> *
    // 4 ---> /
    operationID = generateRandomNumber(3)
    switch (operationID) {
        case 1: 
        result = firstNumber + secondNumber;
        break;
        case 2: 
        result = firstNumber - secondNumber;
        break;
        case 3: 
        result = firstNumber * secondNumber;
        break;
        // case 4: 
        // result = firstNumber / secondNumber;
        // break;
    }

    return result
}

firstNumber = generateRandomNumber(10);
secondNumber = generateRandomNumber(10);
result = getResult()

firstNumberSlot.textContent = firstNumber;
secondNumberSlot.textContent = secondNumber;
resultSlot.textContent = result;

function validateAnswer(){
    
}