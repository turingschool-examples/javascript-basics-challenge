class Mathing {
  total(arr) {
    var total = arr.reduce(function(sum, val) {
      return sum + val;
    }, 0)
    return total;
  }
}

module.exports = Mathing;
