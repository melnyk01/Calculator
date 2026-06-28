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

let number = '';
let secondNumber = '';
let operator = '';
let result = '';
let isDecimal = false;

let dotButton = document.getElementById('dot');
dotButton.addEventListener('click', () => {
    dotButton.setAttribute('disabled', '');
    isDecimal = true;
})
//Clear the input field
let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    input.textContent = '';
    number = '';
    secondNumber = '';
    operator = '';
    isDecimal = false;
    dotButton.removeAttribute('disabled');
});

let clearLast = document.querySelector('#clear-last');
clearLast.addEventListener('click', () => {
    console.log('before ' + number, secondNumber, operator, result);
    if (result && !operator) {
        input.textContent = '';
        result = '';
        number = '';
        secondNumber = '';
        operator = '';
    } else if ('+-*/'.includes(input.textContent.slice(-1))) {
        operator = '';
        input.textContent = input.textContent.slice(0, -1);
    } else if (input.textContent.slice(-1) === '.') {
        dotButton.removeAttribute('disabled');
        isDecimal = false;
        if (secondNumber) {
            secondNumber = secondNumber.slice(0, -1);
            input.textContent = input.textContent.slice(0, -1);
        } else {
            input.textContent = input.textContent.slice(0, -1);
            number = input.textContent
        }
    } else if (secondNumber) {
        secondNumber = secondNumber.slice(0, -1);
        input.textContent = input.textContent.slice(0, -1);
    } else {
        input.textContent = input.textContent.slice(0, -1);
        number = input.textContent
    }
    console.log('after ' + number, secondNumber, operator, result);
    
})

let input = document.querySelector('#input')
let numberButtons = document.querySelector('#numbers');

numberButtons.addEventListener
    ('click', (e) => {
    if (result && !operator) {
        input.textContent = '';
        result = '';
        number = '';
        secondNumber = '';
        operator = '';
    }
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

    if (!operator) {
        input.textContent += e.target.textContent;
        operator = e.target.textContent;
    } else if (secondNumber === '0' && operator === '/') {
        zeroDivision()
    } else if (secondNumber) {
        number = operate(number,secondNumber);
        secondNumber = ''
        operator = e.target.textContent;
        input.textContent = number + operator;
    } else {
        operator = e.target.textContent;
        input.textContent = number + operator
    }
    dotButton.removeAttribute('disabled');
    isDecimal = false;
    });

// Calculates the input numbers

let calculate = document.querySelector('button#calculate');
calculate.addEventListener('click', () => {
    if (input.textContent === '') {
        alert("Can't evaluate void!")
    } else if (secondNumber === "0"  && operator === '/') {
        zeroDivision()
    } else if (secondNumber) {
        result = operate(number, secondNumber);
        input.textContent = result;
        number = result;
        operator = '';
        secondNumber = '';
    } 
    dotButton.removeAttribute('disabled');
    isDecimal = false;


});

// Input from keyboard

document.addEventListener('keydown', (e) => {
    const keyName = e.key;
    console.log(keyName);
    console.log(input.textContent.slice(-1));
    if (keyName === 'Backspace') {
        console.log('before ' + number, secondNumber, operator,     result);
        if (result && !operator) {
            input.textContent = '';
            result = '';
            number = '';
            secondNumber = '';
            operator = '';
        } else if ('+-*/'.includes(input.textContent.slice(-1))) {
            operator = '';
            input.textContent = input.textContent.slice(0, -1);
        } else if (input.textContent.slice(-1) === '.') {
            dotButton.removeAttribute('disabled');
            isDecimal = false;
            if (secondNumber) {
                secondNumber = secondNumber.slice(0, -1);
                input.textContent = input.textContent.slice(0, -1);
            } else {
                input.textContent = input.textContent.slice(0, -1);
                number = input.textContent
            }
        } else if (secondNumber) {
            secondNumber = secondNumber.slice(0, -1);
            input.textContent = input.textContent.slice(0, -1);
        } else {
            input.textContent = input.textContent.slice(0, -1);
            number = input.textContent
        }
        console.log('after ' + number, secondNumber, operator,result);
    } else if (keyName === 'Enter' || keyName === '=') {
        if (input.textContent === '') {
            alert("Can't evaluate void!")
        } else if (secondNumber === "0"  && operator === '/') {
            zeroDivision()
        } else if (secondNumber) {
            result = operate(number, secondNumber);
            input.textContent = result;
            number = result;
            operator = '';
            secondNumber = '';
        } 
        dotButton.removeAttribute('disabled');
        isDecimal = false;
    } else {
        const isDot = e.key === '.';
        const isNumber = e.key.match(/[0-9]/);
        const isOperator = ['+','-','*','/'].includes(e.key);
        if (isDot && (!isDecimal)) {
            dotButton.setAttribute('disabled', '');
            isDecimal = true;
            if (operator) {
                input.textContent += keyName;
                secondNumber += keyName;
            } else {
                input.textContent += keyName;
                number += keyName;        
            }     
        }
        if (isNumber) {
            if (operator) {
                input.textContent += keyName;
                secondNumber += keyName;
            } else {
                input.textContent += keyName;
                number += keyName;        
            } 
        } else if (isOperator && !operator) {
            operator = keyName;
            input.textContent += keyName;
            dotButton.removeAttribute('disabled');
            isDecimal = false;
        } else if (operator && secondNumber && isOperator) {
            number = operate(number,secondNumber);
            operator = keyName; 
            input.textContent = number + operator;
            secondNumber = '';
            dotButton.removeAttribute('disabled');
            isDecimal = false;
        }
            
    }

    console.log(number, secondNumber, operator);
    
})