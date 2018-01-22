function total(nums){
  numTotal = nums.reduce( function(sum, num){
    return sum + num;
  }, 0);
  return numTotal
}

function mean(nums) {
  
}

function median(nums) {

}

function mode(nums) {

}

module.exports = { total, mean, median, mode }