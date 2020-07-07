// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { countsAsAYes } from '../countsAsAYes.js';

const test = QUnit.test;

test('should return true if passes anything that starts with a Y', (expect) => {
    //Arrange
    // Set up your parameters and expectations
    const word = 'yes';
    const word1 = 'y';
    const word2 = 'yea';
    const word3 = 'yeah';
    const word4 = 'yas';
    const word5 = 'yasss';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes(word);
    const actual1 = countsAsAYes(word1);
    const actual2 = countsAsAYes(word2);
    const actual3 = countsAsAYes(word3);
    const actual4 = countsAsAYes(word4);
    const actual5 = countsAsAYes(word5);


    //Assert
    // Make assertions about what is expected valid result
    expect.equal(actual, expected);
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
    expect.equal(actual4, expected);
    expect.equal(actual5, expected);
});

test('it should return false if passed any that does NOT start with at Y', (expect) => {
    const word = 'no';
    const word1 = 'n';
    const word2 = 'naw';
    const word3 = 'nope';
    const expected = false;

    const actual = countsAsAYes(word);
    const actual1 = countsAsAYes(word1);
    const actual2 = countsAsAYes(word2);
    const actual3 = countsAsAYes(word3);

    expect.equal(actual, expected);
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
});