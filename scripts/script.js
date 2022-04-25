const firstNumberSlot = document.querySelector('#first_number');
const secondNumberSlot = document.querySelector('#second_number');
const resultSlot = document.querySelector('#result');

function generateRandomNumber(max){
    return Math.round(Math.random() * (max - 1)) + 1;
}

function getResult(){
    // 1 ---> +
    // 2 ---> -
    // 3 ---> *
    // 4 ---> /
    operationID = generateRandomNumber(4)
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
        case 4: 
        result = firstNumber / secondNumber;
        break;
    }

    return result
}

firstNumber = generateRandomNumber(10);
secondNumber = generateRandomNumber(10);
result = getResult()

firstNumberSlot.textContent = firstNumber;
secondNumberSlot.textContent = secondNumber;
resultSlot.textContent = result;

