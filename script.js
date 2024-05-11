let numberOne = "";
let operator = "";
let numberTwo = "";
let result = "";
let displayValue;
const CALCULATOR_MAX_LENGTH = 12;
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
            result = String(
                operate(parseFloat(numberOne), parseFloat(numberTwo), operator)
            );
            numberOne = result;
            if (result.length > 12) {
                result = parseFloat(result).toFixed(2);
                if (result.length > 12) {
                    result = parseFloat(result).toExponential(2);
                }
            }
            display.textContent = result;
            numberTwo = "";
            return result;
        }
        operator = operatorBtns[i].textContent;
        updateDisplay(operator);
    });
}

const equalsBtn = document.querySelector(".equals-button");
equalsBtn.addEventListener("click", () => {
    result = updateDisplay("=");
});

const decimalBtn = document.querySelector(".decimal-button");
decimalBtn.addEventListener("click", () => {
    if (numberOne === result || (numberTwo === "" && operator !== "")) {
        display.textContent = "0";
        if (numberOne === "") {
            numberOne = updateDisplay(".");
        } else {
            numberTwo = updateDisplay(".");
        }
    }
    if (!display.textContent.includes(".")) {
        if (operator === "") {
            numberOne = updateDisplay(".");
        } else {
            numberTwo = updateDisplay(".");
        }
    }
});

const backSpaceBtn = document.querySelector(".backspace-button");
backSpaceBtn.addEventListener("click", () => {
    if (display.textContent !== "") {
        if (operator === "") {
            numberOne = updateDisplay("bs");
        } else {
            numberTwo = updateDisplay("bs");
        }
    }
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
    if (num2 === 0) {
        return "ERROR LOL";
    }
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (num1 === "") {
        num1 = 0;
    }
    if (num2 === "") {
        num2 = 0;
    }
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
    result = "";
}

function updateDisplay(input) {
    if (result !== "ERROR LOL") {
        if (input === "bs") {
            display.textContent = display.textContent.substring(
                0,
                display.textContent.length - 1
            );

            displayValue = display.textContent;
            return displayValue;
        } else if (!isNaN(input) || input === ".") {
            if (display.textContent.length < CALCULATOR_MAX_LENGTH) {
                if (numberTwo === "" && operator !== "" && input !== ".") {
                    display.textContent = input;
                } else {
                    display.textContent += input;
                }

                displayValue = display.textContent;
                return displayValue;
            }
        } else if (numberTwo !== "" && input === "=") {
            numberTwo = displayValue;
            result = String(
                operate(parseFloat(numberOne), parseFloat(numberTwo), operator)
            );
            numberOne = result;
            if (result.length > 12) {
                result = parseFloat(result).toFixed(2);
                if (result.length > 12) {
                    result = parseFloat(result).toExponential(2);
                }
            }
            display.textContent = result;
            operator = "";
            numberTwo = "";
            return result;
        }
    }
}
