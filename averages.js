// module.exports = {
//
//   total:
//

var pry = require("pryjs");

  Array.prototype.total = function() {
    var sum = this.reduce(function (total, num) {
      return total + num;
    }, 0);
    return sum
  }

  Array.prototype.mean = function() {
    return (this.total()/ this.length)
  }

  Array.prototype.median = function() {
    var nums = this.sort(function(a, b) { return a - b; });
    var middle = Math.trunc(nums.length / 2)
    if (nums.length % 2 != 0) {
      return nums[middle]
    }
    else {
      return (nums[middle] + nums[middle - 1])/2
    }
  }

  Array.prototype.mode = function() {
    // count the frequency
    var count = {}
    this.forEach ( function(num) {
      if (count[num]) { count[num]++
      } else { count[num] = 1};
    });
    // find max value
    var max_frequency = undefined;
    Object.keys(count).forEach(function(num) {
      if (!max_frequency) {
      	max_frequency = count[num];
      } else if (max_frequency < count[num]){
        max_frequency = count[num];
      }
    });

    // This gives the KEY of the max value. might be useful?
    // var max_frequency = Object.keys(count).reduce(function(a, b){ return count[a] > count[b] ? a : b });

    // return all keys with that max value.
    var modes = Object.keys(count).filter( function(num) {
      // eval(pry.it);
      return count[num] == max_frequency;
    });

    var result = {}
    modes.forEach( function(num) {result[num] = max_frequency});
    return result
  }

  x = [1, 2, 3, 4, 4]
  y = [1, 2, 2, 3, 3]
  z = [1, 2, 3]


  x.mode()
  y.mode()
  z.mode()

// }
