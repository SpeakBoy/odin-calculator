let leftOperand;
let operator;
let rightOperand;
let result;
let operandSelected;

const keyPresses = document.addEventListener("keydown", (event) => handleKeyPress(event));
const display = document.querySelector("#display");

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(leftOperand, operator, rightOperand) {
    switch (operator) {
        case "+":
            return add(leftOperand, rightOperand);
        case "-":
            return subtract(leftOperand, rightOperand);
        case "*":
            return multiply(leftOperand, rightOperand);
        case "/":
            return divide(leftOperand, rightOperand);
    }
}

function updateOperand(operandValue)
{
    if (operandSelected === "left")
    {
        if (result !== "" 
            && leftOperand !== "")
        {
            result = "";
            leftOperand = "";
        }
        if (operandValue === "." 
            && leftOperand.includes(operandValue))
        {
            return;
        }
        if (operandValue === "Backspace")
        {
            leftOperand = leftOperand.length <= 1 ? "0" : leftOperand.slice(0, -1);
        }
        else
        {
            if (leftOperand[0] === "0")
            {
                leftOperand = operandValue;
            }
            else
            {
                leftOperand += operandValue;
            }
        }

        updateDisplay(leftOperand);
    }
    else
    {
        if (operandValue === "." 
            && rightOperand.includes(operandValue))
        {
            return;
        }
        if (operandValue === "Backspace")
        {
            rightOperand = rightOperand.length <= 1 ? "0" : rightOperand.slice(0, -1);
        }
        else
        {
            if (rightOperand === "0")
            {
                rightOperand = operandValue;
            }
            else
            {
                rightOperand += operandValue;
            }
        }
        updateDisplay(rightOperand);
    }
}

function updateOperator(operatorValue)
{
    if (operandSelected === "right" && rightOperand !== "")
    {
        evaluate();
    }
    operator = operatorValue;
    rightOperand = "";
    operandSelected = "right";
}

function evaluate()
{
    if (operator === "")
    {
        operator = "+";
        rightOperand = "0";
    }
    else if (rightOperand === "")
    {
        rightOperand = leftOperand;
    }
    result = operate(+leftOperand, operator, +rightOperand);
    operandSelected = "left";
    leftOperand = "";
    updateOperand(result);
}

function reset()
{
    leftOperand = "";
    operator = "";
    rightOperand = "";
    result = "";
    operandSelected = "left";
    resetDisplay();
}

function resetDisplay()
{
    display.textContent = "0";
}

function updateDisplay(displayValue)
{
    display.textContent = displayValue;
}

function initNumberBtns()
{
    const numberBtns = document.querySelectorAll(".number");
    for (const numberBtn of numberBtns)
    {
        numberBtn.addEventListener("click", (event) => {
            const number = event.target.textContent;
            updateOperand(number);
        });
    }
}

function initOperatorBtns()
{
    const operatorBtns = document.querySelectorAll(".operator");
    for (const operatorBtn of operatorBtns)
    {
        operatorBtn.addEventListener("click", (event) => {
            const operator = event.target.textContent;
            updateOperator(operator);
        });
    }
}

function initEqualsBtn()
{
    const equalsBtn = document.querySelector("#equals");
    equalsBtn.addEventListener("click", evaluate);
}

function initClearBtn()
{
    const clearBtn = document.querySelector("#clear");
    clearBtn.addEventListener("click", reset);
}

function initDecimalBtn()
{
    const decimalBtn = document.querySelector("#decimal");
    decimalBtn.addEventListener("click", (event) => {
        const decimal = event.target.textContent;
        updateOperand(decimal);
    });
}

function initBackspaceBtn()
{
    const backspaceBtn = document.querySelector("#backspace");
    backspaceBtn.addEventListener("click", (event) => {
        const backspace = event.target.textContent;
        updateOperand(backspace);
    });
}

function handleKeyPress(event)
{
    const keyName = event.key;

    switch (keyName)
    {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
        case "Backspace":
            updateOperand(keyName);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            updateOperator(keyName);
            break;
        case "=":
        case "Enter":
            evaluate();
            break;
    }
}

function init()
{
    reset();
    initNumberBtns();
    initOperatorBtns();
    initEqualsBtn();
    initClearBtn();
    initDecimalBtn();
    initBackspaceBtn();
}

init();