//import functions and grab DOM elements

const myButton = document.getElementById('quiz-button');
const resultSpan = document.getElementById('result');

// initialize state

// set event listeners to update state and DOM
myButton.addEventListener('click', () => {

    const name = prompt('what is your name?');
    // name input

    const response1 = prompt('Is the sky blue in the photo?');
    // Correct answer is Yes

    const response2 = prompt('Is there a RV in the pic?');
    // Correct answer is Yes

    const response3 = prompt('Are there any birds visible in the pic?');
    // Correct answer is No

    let score = 0;

    console.log(name, response1, response2, response3);

    // if the first answer is yes, add one to the score
    if (response1 === 'yes') {
        score++;
    }

    // if the second answer is yes, add one to the score
    if (response2 === 'yes') {
        score++;
    }

    // if the third answer is no, add one to the score
    if (response3 === 'no') {
        score++;
    }

    console.log(score);

    resultSpan.textContent = name + score;
});
