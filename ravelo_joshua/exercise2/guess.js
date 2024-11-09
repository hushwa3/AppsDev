const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const resultDiv = document.getElementById('result');

    if (userGuess === randomNumber) {
        resultDiv.textContent = "Correct! You guessed it right.";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Wrong! Not matched.";
        resultDiv.style.color = "red";
    }
}