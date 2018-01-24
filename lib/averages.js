var mathjs = require('mathjs');

function sum(total, num){
  return total + num
}

function total(array) {
  return array.reduce(sum)
}

function mean(array) {
  var average = (array.reduce(sum)) / array.length
  return average
}

function median(array) {
  return mathjs.median(array)
}

function mode(array) {
  mapping = {};
  for (var i = 0; i < array.length; i++) {
    mapping[array[i]] = (mapping[array[i]] || 0) + 1;
  }
  mode = Object.keys(mapping).reduce(function (a, b) {
    return mapping[a] > mapping[b] ? a : b;
  });
  output = {};
  output[mode] = mapping[mode];
  return output;
}

module.exports = {
  total: total,
  mean: mean,
  median: median,
  mode: mode
};
