let math = require('mathjs');

function getSum(total, num){
  return total + num;
}

function total(sugArray) {
  return sugArray.reduce(getSum);
}

function mean(sugArray) {
  let avg = (sugArray.reduce(getSum)) / sugArray.length
  return avg
}

function median(sugArray) {
  return math.median(sugArray)
}

function mode(sugArray) {
  var modes = {};
  for(var i = 0; i < sugArray.length; i++){
    if(modes[sugArray[i]] === undefined){
      modes[sugArray[i]] = 0;
    }else{
      modes[sugArray[i]] += 1;
    }
  }
  return modes
}
module.exports = {
  total,
  mean,
  median,
  mode
}
