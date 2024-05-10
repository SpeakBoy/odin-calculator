let numberOne;
let operator;
let numberTwo;
let displayValue;
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear-button");
clearBtn.addEventListener("click", clearDisplay);
const numberBtns = document.querySelectorAll(".number-button");

for (i = 0; i < numberBtns.length; i++) {
    const number = numberBtns[i].textContent;
    numberBtns[i].addEventListener("click", () => {
        updateDisplay(number);
    });
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (operator === "+") {
        add(num1, num2);
    } else if (operator === "-") {
        subtract(num1, num2);
    } else if (operator === "*") {
        multiply(num1, num2);
    } else if (operator === "/") {
        divide(num1, num2);
    }
}

function clearDisplay() {
    display.textContent = "";
}

function updateDisplay(input) {
    display.textContent += input;
    displayValue = parseInt(display.textContent);
}
