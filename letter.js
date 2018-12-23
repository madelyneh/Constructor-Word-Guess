function Letter(value) {

  this.value = value;
  this.guessed = false;

  if (this.value === " ") {
    this.guessed = true;
  }
  this.guess = function() {
    if (this.guessed) {
      return (' ' + this.value + ' ');  
    }  
    return (" _ ");
  };
};

module.exports = Letter;