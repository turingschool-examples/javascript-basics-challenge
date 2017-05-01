var pry = require('pryjs');

Array.prototype.pad = function(num, word){
  var arrLength = this.length;
  var array = this;
  var timesDo = checkInput(num, array)
  var newArray = [];
  for(i=0; i < timesDo; i++){
    if(array[i] == undefined){
      checkWord(word, newArray)
    } else {
      newArray.push(array[i])
    }
  }
  return newArray
}

function checkInput(num, array) {
  if (num <= array.length){
    return array.length
  } else {
    return num
  }
}

function checkWord(word, newArray) {
  if(word == undefined){
    newArray.push(null)
  } else {
    newArray.push(word)
  }
  return newArray
}
