function total(arr) {
  arr.reduce(function(sum, value) {
    return sum + value
  }, 0)
}

function mean(arr) {
  var count = arr.length;
  var tote = total(arr);
  return tote / count;
}

function median(arr) {

}

function mode(arr) {
  
}

// .sort(function(a, b){return a-b})




// Write a function for each of the following. Each function will take an Array as the one argument..
//
// 1. `total` - returns the total of all the values in the array
// 2. `mean` - returns the mean (average) of the array
// 3. `median` - returns the median of the array
// 4. `mode`- returns an object representing the mode(s) of the array with the property being the mode and the value being the frequency

module.exports = {
  total,
  mean,
  median,
  mode
}
