Array.prototype.total = function() {
  var sum = this.reduce(function (total, num) {
    return total + num;
  }, 0);
  return sum;
};

Array.prototype.mean = function() {
  return (this.total()/ this.length);
};

Array.prototype.median = function() {
  var nums = this.sort(function(a, b) { return a - b; });
  var middle = Math.trunc(nums.length / 2);
  if (nums.length % 2 !== 0) {
    return nums[middle];
  }
  else {
    return (nums[middle] + nums[middle - 1])/2;
  }
};

Array.prototype.mode = function() {
  var count = {};
  this.forEach ( function(num) {
    if (count[num]) {
      count[num]++;
    } else { count[num] = 1;
    }
  });

  var max_frequency;
  Object.keys(count).forEach(function(num) {
    if (!max_frequency) {
    	max_frequency = count[num];
    } else if (max_frequency < count[num]){
      max_frequency = count[num];
    }
  });

  var modes = Object.keys(count).filter( function(num) {
    return count[num] == max_frequency;
  });

  var result = {};
  modes.forEach( function(num) {
      result[num] = max_frequency;
  });
  return result;
};
module.exports = Array.prototype.total;
module.exports = Array.prototype.mean;
module.exports = Array.prototype.median;
module.exports = Array.prototype.mode;
