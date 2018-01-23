var pry = require('pryjs');

function total(collection){
  return collection.reduce(add, 0)
  function add(a, b){
    return a + b;
  }
}

function mean(collection) {
  return total(collection) / collection.length
}

function median(collection) {
  var half = Math.floor(collection.length / 2)
  var sorted_array = collection.sort()
  if (collection.length % 2 === 0){
    halfway = collection.length / 2;
    return ((sorted_array[half] + sorted_array[half - 1])/ 2);
  }
else {

  return sorted_array[half]
}
}

function mode(collection){
  var results = {};

  for (var i = 0; i < collection.length; i++) {
    if (results[collection[i]] === undefined){
      results[collection[i]] = 1;
    }
    else{
      results[collection[i]] ++

    }
  }
  var greatestFreq = 0;
  var mode;
   for(var prop in results){
       if(results[prop] > greatestFreq){
           greatestFreq = results[prop];
           mode = prop;
       }
   }
   return parseInt(mode);
}
module.exports = {
total,
mean,
median,
mode
}
