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
function zeroDivision() {
    alert("Can't divide by 0")
    secondNumber = '';
    input.textContent = number + operator
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

//Getting operator

let operatorButtons = document.querySelector('#operators');
operatorButtons.addEventListener('click', (e) => {
    console.log(number, secondNumber, operator);
    if (!operator) {
        input.textContent += e.target.textContent;
        operator = e.target.textContent;
    } else if (secondNumber != '0') {
        number = operate(number,secondNumber);
        secondNumber = ''
        operator = e.target.textContent;
        input.textContent = number + operator;
    } else {
        zeroDivision()
    }
    });

// Calculates the input numbers

let calculate = document.querySelector('button#calculate');
calculate.addEventListener('click', () => {
    if (input.textContent === '') {
        alert("Can't evaluate void!")
    } else if (secondNumber === "0") {
        zeroDivision()
    } else {
        input.textContent = operate(number, secondNumber)
    }


});

function operate(a, b) {
    let result = '';

    switch(operator) {
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
        default:
            result = a;
            break;
    }
    if (result % 1 != 0) {
        result = result.toFixed(3);
        console.log(result);
    }
    
    return String(result)
}
