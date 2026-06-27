function add(a, b) {
    return +a + +b
}
function subtract(a, b) {
    return +a - +b
}
function multiply(a, b) {
    return +a * +b
}
function divide(a, b) {
    return +a / +b
}

let number = '';
let secondNumber = '';
let operator = '';


//Clear the input field
let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    input.textContent = '';
    number = '';
    secondNumber = '';
    operator = '';
});

//Getting first number
let input = document.querySelector('#input')
let numberButtons = document.querySelector('#numbers');
console.log(numberButtons)
numberButtons.addEventListener
    ('click', (e) => {
    if (!operator) {
        input.textContent += e.target.textContent;
        number += e.target.textContent;
    } else {
        input.textContent += e.target.textContent;
        secondNumber += e.target.textContent;
        };

    console.log(number, secondNumber, operator);
});

let operatorButtons = document.querySelector('#operators');
operatorButtons.addEventListener('click', (e) => {
    console.log(number, secondNumber, operator);
    if (!operator) {
        input.textContent += e.target.textContent;
        operator = e.target.textContent;
    } else {
        number = operate(number,secondNumber);
        secondNumber = ''
        operator = e.target.textContent;
        input.textContent = number + operator;
    }
    });
//Getting operator

// Calculates the input numbers
let calculate = document.querySelector('button#calculate');
calculate.addEventListener('click', () => {
    if (input.textContent === '') {
        alert("Can't evaluate void!")
    } else {
        let result = operate(number, secondNumber)
        input.textContent = result;
    }


});

function operate(a, b) {
    if (operator == '+') {
        return String(add(number,secondNumber));
    }
    if (operator == '-') {
        return String(subtract(number,secondNumber));
    }
    if (operator == '*') {
        return String(multiply(number,secondNumber));
    }
    if (operator == '/') {
        return String(divide(number,secondNumber));
    }
    else return String(number);
    
}