pry = require('pryjs')

function guess(number){
  if(number>this.answer){
    console.log('high');
    return 'high';
  }else if (number<this.answer){
    console.log('low');
    return 'low'
  }else{
    console.log("correct");
    solvedStatus.solved = true
  };
};

var solvedStatus = {
  solved:false
};

function isSolved(){
  console.log(solvedStatus.solved);
  return solvedStatus.solved
};

function GuessingGame(answer){
  this.guess = guess
  this.answer = answer
  this.isSolved = isSolved
};

var game = new GuessingGame(20);

game.guess(21);
game.isSolved();
