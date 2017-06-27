/*jshint esversion: 6 */

function countNumbersBetween(nums, lowBound, highBound) {
  if(nums.length == 0) {
    return 0;
  }
  var result = nums.filter(function(num) {
    return (num >= lowBound && num <= highBound);
  });
  return result.length;
}

module.exports = countNumbersBetween;
