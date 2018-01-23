var pry = require('pryjs');


function total(array) {
  return (array.reduce(add,0))
}

function add(num1,num2) {
  return (num1 + num2)
}

function mean(array) {
  return (total(array) / array.length)
}

function median(array) {  
  if (array.length % 2 !== 0) {
    var index = (array.length / 2)
    return array[index - 0.5]
  }
  else {
    var index = (array.length / 2)
    return (mean([array[index], array[index - 1]]))
  }
}


module.exports = {total, mean, median}
