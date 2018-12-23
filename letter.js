let input = process.argv[2];
let wordArray = ["one", "two", "three"];

let randomIndex = [Math.floor(Math.random() * wordArray.length)];
let word = Array.from(wordArray[randomIndex]);

let wordLength = [];
  for (let i = 0; i < word.length; i++) {
    wordLength.push('_');
    };
let placeholder = wordLength.join(" ");


  // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
let Letter = function(value) {

  // A string value to store the underlying character for the letter
  this.value = value;
  // A boolean value that stores whether that letter has been guessed yet
  this.guessed = false;

  if (this.value === " ") {
    this.guessed = true;
  } 
};

// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
Letter.prototype.print = function() {

  if (this.guessed) {
    return (' ' + this.value + ' ');    
  }  
  return (" _ ");
};
  // console.log("-----Placeholder-----");
  // console.log(placeholder);
  // console.log("----Word------");
  // console.log(word);
  // console.log("----Input------");
  // console.log(input);
  // console.log("----------");

module.exports = Letter;