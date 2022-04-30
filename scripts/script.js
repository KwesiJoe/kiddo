const firstNumberSlot = document.querySelector('#first_number');
const secondNumberSlot = document.querySelector('#second_number');
const operationSlot = document.querySelector('#operation');
const resultSlot = document.querySelector('#result');
const addBtn = document.querySelector('#addition')
const subtractBtn = document.querySelector('#subtraction')
const multiplyBtn = document.querySelector('#multiplication')


//Event listener for class 'operations'
const operationsArr = [addBtn, subtractBtn, multiplyBtn]
operationsArr.forEach(item => {
    item.addEventListener('click', () => {
        operationSlot.innerHTML = item.innerHTML
    })
})

function generateRandomNumber(max){
    return Math.round(Math.random() * (max - 1)) + 1;
}

function getResult(){
    operationID = generateRandomNumber(3)
    switch (operationID) {
        case 1: //addition
            result = firstNumber + secondNumber;
            break;
        case 2: //subtraction
            result = firstNumber - secondNumber;
            break;
        case 3: //multiplication
            result = firstNumber * secondNumber;
            break;
        // case 4: //division
        // result = firstNumber / secondNumber;
        // break;
    }

    return result
}

// Gameplay
firstNumber = generateRandomNumber(10);
secondNumber = generateRandomNumber(10);
result = getResult()

//update HTML
firstNumberSlot.textContent = firstNumber;
secondNumberSlot.textContent = secondNumber;
resultSlot.textContent = result;

function validateAnswer(){
    
}