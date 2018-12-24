let Letter = require('./letter');

let Word = function(value) {
  this.value = value;
  this.correct = '';
  this.incorrect = 6;

  this.letterObj = [];
  // Makes a new Letter object for each letter in the currentWord and pushes them into an array
  for(let i = 0; i < value.length; i++) {
    this.letterObj.push(new Letter(this.value[i]));
    };

 // Prints out the response given by the Letter.guess function
  this.placeholder = function(){
    let outcome = '';

    for (let i=0; i < this.letterObj.length; i++) {
      outcome += this.letterObj[i].guess();
    } return outcome;
  };
// Checks if the users guess was in the currentWord or not
  this.newGuess = function(input) {
    this.response = "incorrect...";

    // Checks is the letter has already been guessed or not
    if (this.correct.indexOf(input) != -1) {
      return console.log('\n\n\nYou already guessed that letter, try again.\n');
    };
   
    for (let i=0; i < this.letterObj.length; i++) {
      if (this.letterObj[i].value === input) {
        this.letterObj[i].guessed = true;
        this.correct += input;
        this.response = "correct!"
      };
    };

    if (this.response === "incorrect...") {
      this.incorrect --;

      if (this.incorrect === 0) {
        return;
      };

      return console.log(`\n\n\nThat guess was ${this.response} You have ${this.incorrect} tries left.\n`);
    };
    
    console.log(`\n\n\nThat guess was ${this.response}\n`);
  }; 
};

module.exports = Word;