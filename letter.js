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
Letter.prototype.guess = function() {

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