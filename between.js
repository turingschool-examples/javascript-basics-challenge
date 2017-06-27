function countNumbersBetween(array, lower, upper){
  count = 0
  for (var i = 0; i<array.length; i++){
    if(array[i]>=lower && array[i]<=upper){
      count++
    }
  }
  return count
}

module.exports = countNumbersBetween