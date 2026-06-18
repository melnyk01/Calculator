function add(a,b) {
    return a + b
}
function subtract(a,b) {
    return a - b
}
function multiply(a,b) {
    return a * b
}
function divide(a,b) {
    return a / b
}

let number = '';
let operator = '';
let secondNumber = 0;

let input = document.querySelector('#input')
let numberButtons = document.querySelector('#numbers');
let inputNumber = numberButtons.addEventListener('click', (e) => {
    number += e.target.textContent;
    input.textContent += e.target.textContent;
})

let operatorButtons = document.querySelector('#operators');
operator = operatorButtons.addEventListener('click', (e) => {
    input.textContent += e.target.textContent;
    operator = e.target.textContent;
    console.log(operator, number);
})

