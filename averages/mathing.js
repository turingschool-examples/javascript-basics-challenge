class Mathing {
  total(arr) {
    return arr.reduce(function(sum, val) {
      return sum + val;
    }, 0)
  }

  mean(arr) {
    return this.total(arr)/arr.length

  }
}

module.exports = Mathing;
