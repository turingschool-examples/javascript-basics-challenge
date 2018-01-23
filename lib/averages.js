var pry = require('pryjs');

var total = function(numbers) {
  return numbers.reduce((sum, number) => sum + number);
}

var mean = function(numbers) {
  const sum = total(numbers);
  return sum/numbers.length;
}

var median = function(array) {
  let len = array.length 
  if(len % 2 != 0) {
    let index = Math.ceil(array.length/2 - 1);
    return array[index]
  } else {
    let topIndex = array.length/2;
    let bottomIndex = topIndex - 1; 
    return (array[topIndex] + array[bottomIndex])/2;
  }
}

var mode = function(array) {
  numCount = array.reduce(function(obj, num) {
    console.log(obj)
    num = num.toString();
    if(!obj[num]) {
      obj[num] = 1;
    } 
    obj[num] += 1;
    return obj
  }, {})
  return returnModes(numCount);
}

var returnModes = function(object) {
  var highest = 0;
  for (var key in object) {
    if(object[key] > highest) {
      highest = object[key];
    }
  }

  var mode = [];

  for(var key in object) {
    if (object[key] === highest) {
      number = parseInt(key);
      mode.push(number);
    }
  }
  return mode;
}


module.exports = {total, mean, median, mode}