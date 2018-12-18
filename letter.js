let input = process.argv[2];
let wordArray = ["one", "two", "three"];

let randomIndex = [Math.floor(Math.random() * wordArray.length)];
let word = Array.from(wordArray[randomIndex]);

let wordLength = [];
  for (let i = 0; i < word.length; i++) {
    wordLength.push('_');
    };
let placeholder = wordLength.join(" ");


let Letter = function(value) {

  this.letter = value;
  this.guessed = false;
  
  this.result = function(result) {
    if (this.letter === " ") {
      this.guessed = true;
      return " ";
    } else {
      if (this.guessed === true) {
        return "_";
      } else {
        return this.letter;
      };
    };
  };
  this.print = function() {

  },
  console.log("-----Placeholder-----");
  console.log(placeholder);
  console.log("----Word------");
  console.log(word);
  console.log("----Input------");
  console.log(input);
  console.log("----------");

};

Letter(input, word, placeholder);
// A string value to store the underlying character for the letter

// A boolean value that stores whether that letter has been guessed yet

// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

module.exports = Letter;