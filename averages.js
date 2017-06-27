var pry = require('pryjs')

Array.prototype.total = function () {
  return this.reduce(function(total, number) {
    return total + number
  }, 0)
}

Array.prototype.mean = function () {
  return (this.total() / this.length).toFixed(2)
}

Array.prototype.median = function () {
  var array = this.sort((a, b) => {
    return a > b ? 1 : -1
  })
  var length = this.length
  if(length % 2 === 0) {
    numOne = array[length / 2]
    numTwo = array[(length / 2) - 1]
    return (numOne + numTwo) / 2
  } else {

    return array[(length - 1) / 2]
  }
}

Array.prototype.mode = function() {
  data = this
  var count = data.reduce(function(count, n) {
    if(!count[n]) {
      count[n] = 0
    }
    count[n]++
    return count
  }, {})

  Map.prototype.values(count){
    console.log();
  })
}



module.exports = Array
