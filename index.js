// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
let Word = require('./word');
let inquirer = require("inquirer")
let wordArray = ["one", "two", "three", "four"];
let currentWord = Array.from((wordArray.splice((Math.floor(Math.random() * wordArray.length)), 1))[0]);

let wordOdj = new Word(currentWord);

// let placeholder = wordLength.join(" ");

let incorrectLetters = [];
let correctLetters = [];
let count = 0;

let game = function() {

  console.log("\n* Guess this word * \n-------------------\n" + wordOdj.placeholder() + "\n-------------------");

  if (count >= 4){
    // game ends
    console.log("end");
    return;
  }
    inquirer.prompt({
        name: "letter",
        type: "text",
        message: "Enter your guess.",
    }).then(function(input) {
      // console.log(input);
      wordOdj.newGuess(input.letter);
      count ++;
      game();
    });

};

game();

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses
