const insertionSort = require('./insertionSort');
var pry = require('pryjs')

function median(array){
  var sortedArray = insertionSort(array);
  var medianIndex = Math.ceil((array.length + 1) / 2);
  return sortedArray[medianIndex]
};

module.exports = median
