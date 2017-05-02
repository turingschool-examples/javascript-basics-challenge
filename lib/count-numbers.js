function countNumbersBetween(array, lowerBound, upperBound) {
  var counter = 0;
  array.forEach(function(number){
    if(number >= lowerBound && number <= upperBound) {
      counter++;
    };
  });
  return counter;
}
module.exports = countNumbersBetween;
