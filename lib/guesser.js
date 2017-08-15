class Guesser {

  constructor(answer){
    this.answer = answer;
    this.guessed = null;
  };

  guess(number){
    this.guessed = number

    if(this.isSolved()){
      return 'Correct';
    } else if (this.isHigh()){
      return 'High';
    } else if (this.isLow()){
      return 'Low';
    } else {
      return "Whatever you entered is totally wrong!"
    };
  };

  isSolved(){
    return this.answer == this.guessed
  };

  isHigh(){
    return this.answer < this.guessed
  };

  isLow(){
    return this.answer > this.guessed
  };
}

module.exports = Guesser