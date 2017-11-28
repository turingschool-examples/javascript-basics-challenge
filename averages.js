function total(array) {
  var sum = 0
  for (var i=0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

function mean(array) {
  var sum = total(array)
  return sum / array.length
}

Array.prototype.sortNormal = function(){return this.sort(function(a,b){return a - b})}

function median(array) {
  length = array.length
  sortedArray = array.sortNormal()
  i = Math.ceil(length / 2) - 1
  if (array.length % 2 === 1)
    return sortedArray[i]
  else
    return (sortedArray[i] + sortedArray[i+1]) / 2
}

function mode(array) {
  var frequency = {};
  var max = 0;
  var result;
  for(var i in array) {
    frequency[array[i]]=(frequency[array[i]] || 0)+1;
    if(frequency[array[i]] > max) {
      max = frequency[array[i]];
      result = array[i];
    }
  }
  return result
}

module.exports = {
  total,
  mean,
  median,
  mode
}

