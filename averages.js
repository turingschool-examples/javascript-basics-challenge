function total(nums) {
  return nums.reduce(function(sum, value) {
    return sum + value;
  })
};

function mean(nums) {
  return total(nums)/nums.length;
};

function median(nums) {
  var halfwayIndex = (Math.round(nums.length / 2)) - 1;
  return nums.sort()[halfwayIndex];
};

function mode(nums) {
  var counter = {};
  var max = 0;
  var modeDigit;
  var result = {};
  nums.forEach(function(num) {
    if (counter[num] > 0) {
      counter[num] += 1;
    } else {
      counter[num] = 1;
    };
  });
  for (var num in counter) {
    if (counter[num] > max) {
      max = counter[num];
      modeDigit = num;
    }
  }
  result[modeDigit] = max;
  return result;
};



module.exports = {
                  total,
                  mean,
                  median,
                  mode
                }