
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

let num1 = "";
let num2 = "";
let operator = ""; 

function operate(n1, n2, op) {
    n1 = Number(n1);
    n2 = Number(n2);

    if(op === "+") {
    return add(n1, n2);
    }
    else if(op === "-") {
    return subtract(n1, n2);
    }
    else if(op === "x") {
        return multiply(n1, n2);
    }
    else if (op === "÷" || op === "/") {
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
                if (operator !== "" && currentInput !== "") {
                    num2 = currentInput;
                    let result = operate(num1, num2, operator);
                    displayPop(result);
                    num1 = result;
                    currentInput = "";
                }
                else {
                    num1 = Number(currentInput);
                    currentInput = "";
                }
            operator = e.target.textContent;
        }
            else if (e.target.classList.contains("equal")) {
                num2 = Number(currentInput);

                if (operator === "÷" && num2 === 0) {
                    displayPop("Nice try, Einstein.");
                    num1 = "";
                    num2 = "";
                    operator = "";
                    currentInput = "";
                    return; 
                    }

                result = operate(num1, num2, operator);
                displayPop(result);

                num1 = result;
                currentInput = "";
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