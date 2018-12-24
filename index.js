let Word = require('./word');
let inquirer = require("inquirer")
let wordArray = ["winter", "snowflakes", "coat", "gloves", "december", "santa"];
let currentWord = (wordArray.splice(0, 1))[0];
let wordOdj = new Word(currentWord);

let game = function() {

  console.log("\n* Guess this word * \n-------------------\n" + wordOdj.placeholder() + "\n-------------------");

  // User ran out of guesses
  if (wordOdj.incorrect === 0){
    console.log("\nYou ran out of tries. :( \nBetter luck next time.\n");
    return;
  }
  inquirer.prompt({
      name: "letter",
      type: "text",
      message: "Enter your guess.",
  }).then(function(input) {
    wordOdj.newGuess(input.letter);

    // User guessed all letters in the word
    if(wordOdj.correct.length === wordOdj.value.length){ 

      console.log(`Great job! The answer was "${currentWord}".`);
      currentWord = (wordArray.splice(0, 1))[0];
      if (currentWord === undefined) {
        return console.log("\nLooks like we are all out of words. Thanks for playing!\n");
      }
      wordOdj = new Word(currentWord);
      wordOdj.incorrect = 6;
      // Ran out of words
      return game();
      }
    
    game();
  });
};
game();
