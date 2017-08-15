var pry = require('pryjs')

class Mathing {
  total(arr) {
    return arr.reduce(function(sum, val) {
      return sum + val;
    }, 0)
  }

  mean(arr) {
    return this.total(arr)/arr.length
  }

  median(arr) {
    return arr[Math.ceil((arr.length-1)/2)]
  }

  mode(arr) {
    var freq = {};
    var max = 0;
    var ans;
    for (var i = 0; i < arr.length; i++) {
      freq[arr[i]] = (freq[arr[i]] || 0) + 1;
      if (freq[arr[i]] > max) {
        max = freq[arr[i]];
        ans = arr[i];
      }
    }
    return ans;
  }
}

module.exports = Mathing;
