var pry = require('pryjs');

function timesTable(number){
  string = "";
  firstArray = createArray(number);
  secondArray = createArray(number);
  for (var i = 0; i < number; i++) {
    for (var j = 0; j < number ; j++) {
      string += (firstArray[i] * secondArray[j]);
      string += " ";
    }
    string += '/n';
  }
  return string;
}

function createArray(number){
  numberArray = [];
  for (var i = 0; i < number; i++) {
    numberArray.push(i+1)
  }
  return numberArray;
}

module.exports = timesTable;
