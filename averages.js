function total(nums){
  numTotal = nums.reduce( function(sum, num){
    return sum + num;
  }, 0);
  return numTotal
}

function mean(nums) {
  return total(nums) / nums.length
}

function sortNums(nums) {
  sorted = nums.sort(function (a, b) {
    return a - b;
  }); 
  return sorted;
}

function median(nums) {
  var sortedNums = sortNums(nums)
  if (sortedNums.length%2){
    var i = Math.floor(sortedNums.length/2)
    return sortedNums[i]
  } else {
    var i = sortedNums.length/2
    return (sortedNums[i] + sortedNums[i-1])/2
  }
}

function mode(nums) {
  var sortedNums = sortNums(nums)
  var numCount = {}
  var mostFrequentNum = 0
  var firstRun = true
  sortedNums.forEach(function(num){
    number = num.toString()
    if (numCount[number]){
     return numCount[number] = (numCount[number] + 1);
    } else {
      return numCount[number] = 1;
    }
  });
  for (var k in numCount) {
    if(firstRun) {
      mostFrequentNum = k;
      firstRun = false;
    } else if (numCount[k] > numCount[mostFrequentNum]) {
      mostFrequentNum = k;
    }
  }
  return mostFrequentNum
}

module.exports = { total, mean, sortNums, median, mode }