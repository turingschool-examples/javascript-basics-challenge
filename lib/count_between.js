function countNumbersBetween(numbers,lowerBound, upperBound){
  var counter = 0;
  numbers.forEach(function(number){
    if(lowerBound < number && number < upperBound){
      counter++
    }
  })
  return counter;
}

module.exports.countNumbersBetween = countNumbersBetween;
