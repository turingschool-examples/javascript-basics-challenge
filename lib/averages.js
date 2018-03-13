const total = (array) => {
  return array.reduce((result, num) => {
    result += num
    return result
  }, 0)
}

const mean = (array) => {
  return total(array) / array.length
}

const median = (array) => {
  return array.sort((a, b) => {
    if (a > b) {
      return -1
    } else {
      return 1
    }
  })[Math.round(array.length / 2)]
}

const mode = (array) => {
  let occurance = array.reduce((result, num) => {
    if (!result[num]) {
      result[num] = 0
    }
    result[num]++
    return result
  }, {})
  let greatestCount = 0
  let mode
  for(var num in occurance) {
    if (occurance[num] > greatestCount) {
      greatestCount = occurance[num]
      mode = num
    }
  }
  return mode
}



module.exports = [total, mean, median, mode]
