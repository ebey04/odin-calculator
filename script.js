
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

let num1;
let num2;
let operator; 

function operate(n1, n2, op) {
    if(op === "+") {
       return add(n1, n2);
    }
    else if(op === "-") {
       return subtract(n1, n2);
    }
    else if(op === "x") {
        return multiply(n1, n2);
    }
    else {
       return  division(n1, n2);
    }
}

const screen = document.getElementById("screen");

function displayPop() {
    screen.textContent = 
}