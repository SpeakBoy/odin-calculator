let leftOperand = "";
let operator = "";
let rightOperand = "";

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
    if (operator === "")
    {
        leftOperand += event.target.textContent;
    }
    else
    {
        rightOperand += event.target.textContent;
    }
}

function updateDisplay(event)
{
    display.textContent += event.target.textContent;
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

initNumberBtns();