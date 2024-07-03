function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    let display = document.getElementById("result");
    display.value += number;
}

function appendOperator(operator) {
    let display = document.getElementById("result");
    let lastChar = display.value.charAt(display.value.length - 1);
    if ("+-*/".includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function appendDot() {
    let display = document.getElementById("result");
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function calculateResult() {
    try {
        let display = document.getElementById("result");
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
