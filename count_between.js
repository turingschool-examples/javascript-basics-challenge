function countBetween(arr, lower, upper){
  count = 0;
  arr.forEach(function(element){
    if (element <= upper && element >= lower){
      count++;
    }
  });
  return count;
}
module.exports = countBetween;
