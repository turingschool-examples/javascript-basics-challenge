sum = (array) => {
  return array.reduce(function(a, b) { return a + b; }, 0);
}

betterSort = (array) => {
  return array.sort(function(a, b){return a - b})
}

getSum = (array) => {
  return sum(array)
}

mean = (array) => {
  return sum(array) / array.length
}

median = (array) => {
  if(array.length % 2 !== 0) {
    return betterSort(array)[Math.floor(array.length / 2)]
  }
  else {
    return (betterSort(array)[array.length / 2] + betterSort(array)[(array.length / 2) - 1]) / 2
  }
}

mode = (array) => {
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
  sum,
  mean,
  median,
  mode
}
