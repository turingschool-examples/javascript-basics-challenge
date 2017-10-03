module.exports = Averages

function Averages(array) {
  this.numbers = array
  this.arrayLength = array.length
  this.total = this.numbers.reduce(function(sum, value) {
      return sum + value;
  }, 0);
  this.mean = (this.total / this.arrayLength);
  this.median = function() {
    if (this.arrayLength % 2 == 0) {
      var lowMid = this.numbers.sort(function(a, b){return a-b})[((this.arrayLength / 2) - 1)]
      var highMid = this.numbers.sort(function(a, b){return a-b})[(Math.ceil(this.arrayLength / 2))]
      return ((lowMid + highMid) / 2)
    } else {
      return this.numbers.sort()[(Math.floor(this.arrayLength / 2))]
    }
  };
  this.mode = function() {
    var freq = {}
    var max = {count: 0, value: 0}
    for (var i = 0; i < this.numbers.length; i++) {
      if (freq[this.numbers[i]] === undefined) {
        freq[this.numbers[i]] = 1
      } else {
        freq[this.numbers[i]] += 1
      };
    }

    for (var i = 0; i < freq.length; i++) {
      if (max[count] < freq[i]){
        max[value] = freq[i]
      }
      return max[value]
    }
    return max[value]
  }
}
