Array.prototype.total = function () {
  return this.reduce(function(total, number) {
    return total + number
  }, 0)
}

Array.prototype.mean = function() {
  return this.total() / this.length
}

Array.prototype.median = function () {
  var sorted = this.sort()
  var half   = Math.floor(this.length / 2)
  if (this.length % 2){
     return sorted[half]
  } else {
    return (sorted[half] + sorted[half - 1]) / 2
  }
}

Array.prototype.mode = function () {
  var numbers = {},
      mode = {},
      frequency = 0
  this.forEach(function findMode(num){
    numbers[num] = (numbers[num] || 0) + 1
    if (frequency < numbers[num]){
      frequency = numbers[num]
      mode[num] = numbers[num]
    }
  })
  return mode
}
module.exports = Array
