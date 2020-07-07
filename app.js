import { countsAsAYes } from './countsAsAYes.js';

// initialize state
const myButton = document.getElementById('quiz-button');
const resultSpan = document.getElementById('result');

// set event listeners to update state and DOM
myButton.addEventListener('click', () => {

    // Name input
    const name = prompt('what is your name?');
    prompt(`Want to take the quiz ${name}?`);

    // Quiz confirmation
    const quitQuiz = confirm('You sure about that?');
    if (!quitQuiz) return;

    // Correct answers are Yes, Yes, No
    const response1 = prompt('Is the sky blue in the photo?');
    const response2 = prompt('Is there a RV in the pic?');
    const response3 = prompt('Are there any birds visible in the pic?');

    alert('The quiz is complete! See your score below!');

    let score = 0;

    if (countsAsAYes(response1)) {
        score++;
    }

    if (countsAsAYes(response2)) {
        score++;
    }

    if (!countsAsAYes(response3)) {
        score++;
    } 

    resultSpan.textContent = (`Alright ${name}! Your score is ${score}!`);
});
