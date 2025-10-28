
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

function displayPop(digit) {
    screen.textContent = digit;
}

const buttons = document.getElementById("btns");
let currentInput = "";

buttons.addEventListener("click", (e) => {
        if (e.target.classList.contains("buttons")) {
            if (e.target.classList.contains("number")) {
                currentInput += e.target.textContent;
                displayPop(currentInput);
                }
            else if (e.target.classList.contains("operator")) {
                num1 = Number(currentInput);
                operator = e.target.textContent;
                currentInput = "";
                console.log(num1, operator)}
            else if (e.target.classList.contains("equal")) {
                num2 = Number(currentInput);
                let result = operate(num1, num2, operator);
                displayPop(result)
                console.log(num2, result);
            }
        }
    });

    const clearBtn = document.querySelector(".clear")

    clearBtn.addEventListener("click", (e) => {
        screen.textContent = " ";
        currentInput = "";
        num1 = "";
        num2 = "";
        operator = "";
    })