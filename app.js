// import here
import { countsAsAYes } from './countsAsAYes.js';

const myButton = document.getElementById('quiz-button');
const resultSpan = document.getElementById('result');

// initialize state

// set event listeners to update state and DOM
myButton.addEventListener('click', () => {

    // name input
    const name = prompt('what is your name?');
    prompt(`Want to take the quiz ${name}?`);

    // confirm user wants to do quiz
    confirm('You sure about that?');

    const response1 = prompt('Is the sky blue in the photo?');
    // Correct answer is Yes

    const response2 = prompt('Is there a RV in the pic?');
    // Correct answer is Yes

    const response3 = prompt('Are there any birds visible in the pic?');
    // Correct answer is No
    prompt('The quiz is complete! See your score below!');

    let score = 0;

    console.log(name, response1, response2, response3);

    // if the first answer is yes, add one to the score
    if (countsAsAYes(response1)) {
        score++;
    }

    // if the second answer is yes, add one to the score
    if (countsAsAYes(response2)) {
        score++;
    }

    // if the third answer is no, add one to the score
    if (!countsAsAYes(response3)) {
        score++;
    }

    console.log(score);

    resultSpan.textContent = (`Alright ${name}! Your score is ${score}!`);
});
