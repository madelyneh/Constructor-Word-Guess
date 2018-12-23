let Letter = require('./letter').default;

let wordArray = ["one", "two", "three"];
let randomIndex = [Math.floor(Math.random() * wordArray.length)];
let currentWord = Array.from(wordArray[randomIndex]);

// let placeholder = wordLength.join(" ");

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
let Word = function(value) {
  this.value = value;
// An array of new Letter objects representing the letters of the underlying word
  this.letterObj = [];

  // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
  this.newLetter = function(value){
    this.letterObj.push(new Letter(value));
    console.log("​Word -> newLetter", newLetter)
  };

  // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js) 
  this.newGuess = function(value) {
    for (let i=0; i<letterObj.length; i++) {

    }

  };

};


module.exports = Word;