let displayElement = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let shouldClearDisplay = false;

// Function to append a number to the display
function appendNumber(number) {
    if (shouldClearDisplay) {
        displayElement.innerText = '';
        shouldClearDisplay = false;
    }
    if (displayElement.innerText === '0') {
        displayElement.innerText = number;
    } else {
        displayElement.innerText += number;
    }
}

// Function to append an operator to the display
function appendOperator(operator) {
    if (currentOperator) {
        calculateResult();
    }
    currentInput = displayElement.innerText;
    currentOperator = operator;
    shouldClearDisplay = true;
}

// Function to clear the display
function clearDisplay() {
    displayElement.innerText = '0';
    currentInput = '';
    currentOperator = '';
}

// Function to delete the last character from the display
function deleteLast() {
    if (displayElement.innerText.length === 1) {
        displayElement.innerText = '0';
    } else {
        displayElement.innerText = displayElement.innerText.slice(0, -1);
    }
}

// Function to calculate the result
function calculateResult() {
    if (!currentOperator) return;
    let secondInput = displayElement.innerText;
    let result;
    
    switch (currentOperator) {
        case '+':
            result = parseFloat(currentInput) + parseFloat(secondInput);
            break;
        case '-':
            result = parseFloat(currentInput) - parseFloat(secondInput);
            break;
        case '*':
            result = parseFloat(currentInput) * parseFloat(secondInput);
            break;
        case '/':
            result = parseFloat(currentInput) / parseFloat(secondInput);
            break;
        default:
            return;
    }
    
    displayElement.innerText = result;
    currentInput = result;
    currentOperator = '';
    shouldClearDisplay = true;
}
