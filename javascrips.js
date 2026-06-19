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
let operator = '';
let secondNumber = '';

//Clear the input field
let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => input.textContent = '')

//Getting first number
let input = document.querySelector('#input')
let numberButtons = document.querySelector('#numbers');
let inputNumber = numberButtons.addEventListener
    ('click', (e) => {
    input.textContent += e.target.textContent;
    number += e.target.textContent
})

//Getting operator
let operatorButtons = document.querySelector('#operators');
operator = operatorButtons.addEventListener('click', (e)=> {
    input.textContent += e.target.textContent;
    operator = e.target.textContent;
    //Getting second number
    let secondInputNumber = numberButtons.addEventListener
    ('click', (e) => {
    secondNumber += e.target.textContent;
    console.log(number, secondNumber, operator)
    })
});
// Calculates the input numbers
let calculate = document.querySelector('button#calculate');
calculate.addEventListener('click', () => {
    number = number.slice(0, secondNumber.length)
    let result = operate(number, secondNumber)
    input.textContent = result;
});

function operate(a, b) {
    if (operator == '+') {
        return (add(number,secondNumber));
    }
    if (operator == '-') {
        return (subtract(number,secondNumber));
    }
    if (operator == '*') {
        return (multiply(number,secondNumber));
    }
    if (operator == '/') {
        return (divide(number,secondNumber));
    }
}