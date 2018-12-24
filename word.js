let Letter = require('./letter');

let wordArray = ["one", "two", "three"];
let randomIndex = [Math.floor(Math.random() * wordArray.length)];
let currentWord = Array.from(wordArray[randomIndex]);

// let placeholder = wordLength.join(" ");

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
let Word = function(value) {
  this.value = value;
  this.letterObj = [];
  for(let i = 0; i < value.length; i++) {
    this.letterObj.push(new Letter(this.value[i]));
    };

  this.placeholder = function(){
    let outcome = '';

    for (let i=0; i < this.letterObj.length; i++) {
      outcome += this.letterObj[i].guess();
    } return outcome;
  };

  this.newGuess = function(input) {
    this.input = input;
  
    for (let i=0; i < this.letterObj.length; i++) {
      if (this.letterObj[i].value === input) {
        this.letterObj[i].guessed = true;
        
        console.log("Good job! " + input + " was a correct guess.");
      }
    } 
  };
};


module.exports = Word;