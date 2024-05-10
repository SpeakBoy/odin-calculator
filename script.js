let numberOne = "";
let operator = "";
let numberTwo = "";
let result;
let displayValue;
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear-button");
clearBtn.addEventListener("click", clearDisplay);
const numberBtns = document.querySelectorAll(".number-button");

for (let i = 0; i < numberBtns.length; i++) {
    const number = numberBtns[i].textContent;
    numberBtns[i].addEventListener("click", () => {
        if (operator === "") {
            numberOne = updateDisplay(number);
        } else {
            numberTwo = updateDisplay(number);
        }
    });
}

const operatorBtns = document.querySelectorAll(".operator-button");

for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", () => {
        if (operator !== "") {
            numberTwo = displayValue;
            numberOne = String(
                operate(parseFloat(numberOne), parseFloat(numberTwo), operator)
            );
            display.textContent = numberOne;
            numberTwo = "";
        }
        operator = operatorBtns[i].textContent;
        updateDisplay(operator);
    });
}

const equalsBtn = document.querySelector(".equals-button");

equalsBtn.addEventListener("click", () => {
    updateDisplay("=");
});

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
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

function clearDisplay() {
    display.textContent = "";
    numberOne = "";
    operator = "";
    numberTwo = "";
}

function updateDisplay(input) {
    if (!isNaN(input)) {
        if ((numberTwo === "" && operator !== "") || numberOne === result) {
            display.textContent = input;
        } else {
            display.textContent += input;
        }
        displayValue = display.textContent;
        return displayValue;
    } else if (numberTwo !== "" && input === "=") {
        numberTwo = displayValue;
        result = String(
            operate(parseFloat(numberOne), parseFloat(numberTwo), operator)
        );
        numberOne = result;
        display.textContent = result;
        operator = "";
        numberTwo = "";
    }
}
