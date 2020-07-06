//import functions and grab DOM elements

const myButton = document.getElementById('quiz-button');

// initialize state

// set event listeners to update state and DOM
myButton.addEventListener('click', () => {

    const name = prompt('what is your name?');
    const response1 = prompt('Is the sky blue in the photo?');
    const response2 = prompt('Is there a RV in the pic?');
    const response3 = prompt('Are there any birds visible in the pic?');

    console.log(name, response1, response2, response3);
});
