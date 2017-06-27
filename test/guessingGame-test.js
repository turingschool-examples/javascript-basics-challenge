// Create a GuessingGame constructor function which is initialized with an integer called answer.
//
// Define an instance method guess which takes an integer called guess as its input. guess should return the string 'high' if the guess is larger than the answer, 'correct' if the guess is equal to the answer, and 'low' if the guess is lower than the answer.
//
// Define an instance method isSolved which returns true if the most recent guess was correct and false otherwise.
//
// For example:
//
// var game = new GuessingGame(20);
//
// game.isSolved();   // => false
//
// game.guess(5);     // => 'low'
// game.guess(40);    // => 'high'
// game.isSolved();   // => false
//
// game.guess(20);    // => 'correct'
// game.isSolved()    // => true

const assert = require('chai').assert
const guessingGame = require('../lib/average')
