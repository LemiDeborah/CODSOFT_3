let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function appendOperator(operator) {
    if (displayValue !== "" && !isNaN(displayValue[displayValue.length - 1])) {
        appendToDisplay(operator);
    }
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        displayValue = "Error";
        document.getElementById("display").value = displayValue;
    }
}

function calculateSin() {
    const angle = parseFloat(displayValue);
    if (!isNaN(angle)) {
        displayValue = Math.sin((angle * Math.PI) / 180).toFixed(4);
        document.getElementById("display").value = displayValue;
    } else {
        displayValue = "Error";
        document.getElementById("display").value = displayValue;
    }
}

function calculateCos() {
    const angle = parseFloat(displayValue);
    if (!isNaN(angle)) {
        displayValue = Math.cos((angle * Math.PI) / 180).toFixed(4);
        document.getElementById("display").value = displayValue;
    } else {
        displayValue = "Error";
        document.getElementById("display").value = displayValue;
    }
}

function calculateTan() {
    const angle = parseFloat(displayValue);
    if (!isNaN(angle)) {
        displayValue = Math.tan((angle * Math.PI) / 180).toFixed(4);
        document.getElementById("display").value = displayValue;
    } else {
        displayValue = "Error";
        document.getElementById("display").value = displayValue;
    }
}
