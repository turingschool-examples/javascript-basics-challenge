class Average {
  total(array) {
    return array.reduce((x, y) => { return x + y}, 0)
  }
  mean(array) {
    return this.total(array) / array.length
  }
  median(array) {
    return array[array.length / 2]
  }
  mode(array) {
    let modeHash = {}
    let max = 0
    let count = 0

    array.forEach((x) => {
      if (modeHash[x]) {
        modeHash[x]++
      } else {
        modeHash[x] = 1
      }

      if (count < modeHash[x]) {
        max = x
        count = modeHash[x]
      }
    })
    if (count == 1) {
      return "No mode"
    } else {
      return max
    }
  }
}

module.exports = Average
