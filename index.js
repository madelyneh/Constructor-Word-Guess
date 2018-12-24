let Word = require('./word');
let inquirer = require("inquirer")
let wordArray = ["one", "two", "three", "four"];
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

      console.log(`Great job! The answer was ${wordOdj.placeholder()}.`);
      currentWord = (wordArray.splice(0, 1))[0];
      console.log("​wordArray", wordArray)
			console.log("​game -> currentWord", currentWord)
      wordOdj = new Word(currentWord);
      wordOdj.incorrect = 6;
      // Ran out of words
      if (currentWord === undefined) {
        return console.log("Looks like we are all out of words. Thanks for playing!");
      }
      return game();
      }
    
    game();
  });
};
game();
