let leftOperand;
let operator;
let rightOperand;

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