/* DOM ELEMENTS */
const clearBtn = document.querySelector(".clear");
const screen = document.getElementById("screen");
const buttons = document.getElementById("btns");

/* GLOBAL VARIABLES */

let currentInput = "";
let num1 = "";
let num2 = "";
let operator = ""; 

/* FUNCTIONS */

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

function displayPop(digit) {
    screen.textContent = digit;
}

/* EVENT LISTENERS */

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("buttons")) {
        if (e.target.classList.contains("number")) {
            currentInput += e.target.textContent;
            displayPop(currentInput);
        }

        else if (e.target.classList.contains("operator")) {
            if (operator !== "" && currentInput !== "") {
                num2 = Number(currentInput);
                let result = operate(num1, num2, operator);
                screen.textContent = "";
                displayPop(result);
                num1 = result;
                currentInput = "";
            } else {
                num1 = Number(currentInput);
                currentInput = "";
            }
            operator = e.target.textContent;
        }

        else if (e.target.classList.contains("equal")) {
            num2 = Number(currentInput);

            if (operator === "÷" && num2 === 0) {
                screen.textContent = "";
                displayPop("Nice try, Einstein.");
                num1 = "";
                num2 = "";
                operator = "";
                currentInput = "";
                return;
            }

            let result = operate(num1, num2, operator);
            screen.textContent = "";
            displayPop(result.toFixed(4));
            num1 = "";
            currentInput = "";
            num2 ="";
            result = "";
            operator = "";
        }
    }
});

document.addEventListener("keydown", (e) => {
    if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
    currentInput += e.key;
    displayPop(currentInput);
    }
    else if (["+", "-", "*", "/"].includes(e.key)) {
    if (operator !== "" && currentInput !== "") {
        num2 = Number(currentInput);
        let result = operate(num1, num2, operator);
        screen.textContent = "";
        displayPop(result);
        num1 = result;
        currentInput = "";
    } else {
        num1 = Number(currentInput);
        currentInput = "";
    }
    operator = e.key; 
    }
    else if (e.key === "Enter" || e.key === "=") {
    num2 = Number(currentInput);
    let result = operate(num1, num2, operator);
    screen.textContent = "";
    displayPop(result);
    num1 = result;
    currentInput = "";
    }
    else if (e.key === "Escape") {
    screen.textContent = "";
    num1 = num2 = operator = currentInput = "";
    }
});

clearBtn.addEventListener("click", (e) => {
    screen.textContent = " ";
    currentInput = "";
    num1 = "";
    num2 = "";
    operator = "";
})