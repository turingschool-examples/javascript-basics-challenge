function total(nums) {
  return nums.reduce(function(sum, value) {
    return sum + value;
  })
};

function mean(nums) {
  return total(nums)/nums.length;
};

function median(nums) {

};

function mode(nums) {

};



module.exports = {
                  total,
                  mean,
                  median,
                  mode
                }