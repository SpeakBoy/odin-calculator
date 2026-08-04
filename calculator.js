let leftOperand = "";
let operator = "";
let rightOperand = "";
let operandSelected = "left";

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

function updateOperand(event)
{
    if (operandSelected === "left")
    {
        leftOperand += event.target.textContent;
    }
    else
    {
        rightOperand += event.target.textContent;
    }
}

function updateOperator(event)
{
    operator = event.target.textContent;
    rightOperand = "";
}

function updateDisplay(event)
{
    if (operandSelected === "left")
    {
        display.textContent = leftOperand;
    }
    else
    {
        display.textContent = rightOperand;
    }
}

function initNumberBtns()
{
    const numberBtns = document.querySelectorAll(".number");
    for (const numberBtn of numberBtns)
    {
        numberBtn.addEventListener("click", (event) => updateOperand(event));
        numberBtn.addEventListener("click", (event) => updateDisplay(event));
    }
}

function initOperatorBtns()
{
    const operatorBtns = document.querySelectorAll(".operator");
    for (const operatorBtn of operatorBtns)
    {
        operatorBtn.addEventListener("click", (event) => updateOperator(event));
    }
}

function init()
{
    initNumberBtns();
    initOperatorBtns();
}

init();