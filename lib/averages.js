function total(array) {
  return (array.reduce(sum, 0));
}

function sum(num1, num2) {
  return (num1 + num2)
}

function mean(array) {
  return Math.round(total(array)/array.length)
}

function median(array) {
  array.sort((a, b) => (a-b));
    if(array.length % 2 !== 0) {
      return array[array.length/ 2 - .5]
    }
    else {
      return ((array[array.length/2 -1] + array[array.length/2])/2)
    }
}

module.exports = {total, sum, mean, median
}
