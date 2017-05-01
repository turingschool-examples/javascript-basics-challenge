function countNumbersBetween(array, min, max) {
var counter = 0;
for (i = 0; i < array.length; i++){
  if (array[i] <= max && array[i] >= min){
    counter++
  }
}
return counter;
}

module.exports = countNumbersBetween