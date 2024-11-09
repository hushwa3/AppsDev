function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 * num2;
    displayResult(result);
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        displayResult("Cannot divide by zero");
    } else {
        const result = num1 / num2;
        displayResult(result);
    }
}

function displayResult(result) {
    document.getElementById('result').value = result;
}