// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
let Word = require('./word');
let inquirer = require("inquirer")

let wordArray = ["one", "two", "three"];

let randomIndex = [Math.floor(Math.random() * wordArray.length)];
let word = Array.from(wordArray[randomIndex]);

let wordLength = [];
  for (let i = 0; i < word.length; i++) {
    wordLength.push('_');
    };
let placeholder = wordLength.join(" ");



let incorrectLetters = [];
let correctLetters = [];
// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses
