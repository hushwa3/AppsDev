let remainingQuestions = [
    ["Which one of the following also known as Conditional Expression: ", "Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if", 3],
    ["When interpreter encounters an empty statements, what it will do:", "Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements", 3],
    ["Which one of the following is the correct way for calling the JavaScript code?", "Preprocessor", "Triggering Event", "RMI", "Function/Method", 3],
    ["Arrays in JavaScript are defined by which of the following statements?", "It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of string", "It is an ordered list of functions", 0],
    ["Which of the following is not javascript data types?", "Null type", "Undefined type", "Number type", "All of the mentioned", 3],
    ["Which of the following scoping type does JavaScript use?", "Sequential", "Segmental", "Lexical", "Literal", 2],
    ["Which of the following is not a framework?", "JavaScript .NET", "JavaScript", "Cocoa JS", "jQuery", 1],
    ["Which of the following is the property that is triggered in response to JS errors?", "onclick", "onerror", "onmessage", "onexception", 1],
    ["What will be the result or type of error if p is not defined in the following JavaScript code snippet? console.log(p)", "Value not found Error", "Reference Error", "Null", "Zero", 1],
    ["Who invented JavaScript?", "James Gosling", "Guido van Rossum", "Brendan Eich", "Robert Oppenheimer", 2],
    ["In what year was the JavaScript invented?", "1995", "1998", "2001", "1994", 0],
    ["What was the name of JavaScript initially?", "Mocha", "LiveScript", "Matcha", "CoffeeScript", 0],
    ["Which of the following is a correct syntax to display “Hello World” in an alert box using JavaScript?", "alertBox('Hello World');", "alert('Hello World');", "msgAlert('Hello World');", "displayAlert('Hello World');", 1],
    ["Which keyword is used for declaring a variable in JavaScript that can be reassigned?", "const", "var", "let", "static", 2],
    ["In JavaScript, which of the following is a valid variable name?", "2names", "$name", "-name", "name2", 1],
    ["Which data type in JavaScript is used to represent logical values?", "String", "Boolean", "Number", "Undefined", 1],
    ["Which operator is used to check both the value and the type of a variable in JavaScript?", "==", "===", "!=", "!==", 1],
    ["What is the output of the following code snippet? var a = 10; console.log(a);", "10", "'10'", "undefined", "null", 0],
    ["Which statement is used to execute a block of code multiple times in JavaScript?", "for", "if", "return", "break", 0],
    ["Which of the following is not a loop structure in JavaScript?", "while", "for", "if", "do-while", 2]
];


let currentQuestions = [];
let startTime;
let timerInterval;
let selectedAnswers = [-1, -1];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startExam() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('exam-screen').style.display = 'block';
    startTime = new Date();
    startTimer();
    getNextQuestions();
}

function startTimer() {
    timerInterval = setInterval(() => {
        const currentTime = new Date();
        const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;
        document.getElementById('timer').textContent = 
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function getNextQuestions() {
    shuffleArray(remainingQuestions);
    currentQuestions = remainingQuestions.slice(0, 2);
    displayQuestions();
    document.getElementById('check-button').disabled = true;
    document.getElementById('next-button').disabled = true;
    selectedAnswers = [-1, -1];
}

function displayQuestions() {
    let html = '';
    currentQuestions.forEach((question, idx) => {
        html += `
            <div class="question-block">
                <div class="result-indicator" id="result${idx}"></div>
                <h2>Question ${idx + 1}</h2>
                <p>${question[0]}</p>
                ${question.slice(1, 5).map((option, optIdx) => `
                    <label class="option">
                        <input type="radio" name="answer${idx}" value="${optIdx}" 
                               onclick="selectAnswer(${idx}, ${optIdx})">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
    });
    document.getElementById('questions-container').innerHTML = html;
}

function selectAnswer(questionNum, index) {
    selectedAnswers[questionNum] = index;
    const allAnswered = selectedAnswers.every((answer, idx) => 
        answer !== -1 && (idx >= currentQuestions.length || currentQuestions[idx]));
    document.getElementById('check-button').disabled = !allAnswered;
}

function checkAnswers() {
    let correctCount = 0;
    currentQuestions.forEach((question, idx) => {
        const resultElement = document.getElementById(`result${idx}`);
        resultElement.style.display = 'block';
        
        if (selectedAnswers[idx] === question[5]) {
            resultElement.textContent = 'Correct!';
            resultElement.className = 'result-indicator correct';
            correctCount++;

            const questionIndex = remainingQuestions.findIndex(q => q[0] === question[0]);
            if (questionIndex !== -1) {
                remainingQuestions.splice(questionIndex, 1);
            }
        } else {
            resultElement.textContent = 'Incorrect';
            resultElement.className = 'result-indicator incorrect';
        }
    });

    document.getElementById('check-button').disabled = true;
    document.getElementById('next-button').disabled = false;

    if (remainingQuestions.length === 0) {
        showResults();
    }
}

function nextQuestions() {
    if (remainingQuestions.length > 0) {
        getNextQuestions();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timerInterval);
    const endTime = new Date();
    const totalSeconds = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    document.getElementById('exam-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';
    document.getElementById('time-taken').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function restartExam() {
    remainingQuestions = [
        ["Which one of the following also known as Conditional Expression: ", "Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if", 3],
        ["When interpreter encounters an empty statements, what it will do:", "Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements", 3],
        ["Which one of the following is the correct way for calling the JavaScript code?", "Preprocessor", "Triggering Event", "RMI", "Function/Method", 3],
        ["Arrays in JavaScript are defined by which of the following statements?", "It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of string", "It is an ordered list of functions", 0],
        ["Which of the following is not javascript data types?", "Null type", "Undefined type", "Number type", "All of the mentioned", 3],
        ["Which of the following scoping type does JavaScript use?", "Sequential", "Segmental", "Lexical", "Literal", 2],
        ["Which of the following is not a framework?", "JavaScript .NET", "JavaScript", "Cocoa JS", "jQuery", 1],
        ["Which of the following is the property that is triggered in response to JS errors?", "onclick", "onerror", "onmessage", "onexception", 1],
        ["What will be the result or type of error if p is not defined in the following JavaScript code snippet? console.log(p)", "Value not found Error", "Reference Error", "Null", "Zero", 1],
        ["Who invented JavaScript?", "James Gosling", "Guido van Rossum", "Brendan Eich", "Robert Oppenheimer", 2],
        ["In what year was the JavaScript invented?", "1995", "1998", "2001", "1994", 0],
        ["What was the name of JavaScript initially?", "Mocha", "LiveScript", "Matcha", "CoffeeScript", 0],
        ["Which of the following is a correct syntax to display “Hello World” in an alert box using JavaScript?", "alertBox('Hello World');", "alert('Hello World');", "msgAlert('Hello World');", "displayAlert('Hello World');", 1],
        ["Which keyword is used for declaring a variable in JavaScript that can be reassigned?", "const", "var", "let", "static", 2],
        ["In JavaScript, which of the following is a valid variable name?", "2names", "$name", "-name", "name2", 1],
        ["Which data type in JavaScript is used to represent logical values?", "String", "Boolean", "Number", "Undefined", 1],
        ["Which operator is used to check both the value and the type of a variable in JavaScript?", "==", "===", "!=", "!==", 1],
        ["What is the output of the following code snippet? var a = 10; console.log(a);", "10", "'10'", "undefined", "null", 0],
        ["Which statement is used to execute a block of code multiple times in JavaScript?", "for", "if", "return", "break", 0],
        ["Which of the following is not a loop structure in JavaScript?", "while", "for", "if", "do-while", 2]
    ];
    currentQuestions = [];
    selectedAnswers = [-1, -1];
    clearInterval(timerInterval);
    
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
}