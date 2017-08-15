const countNumbersBetween = (arr, low, high) => {
  return arr.reduce( (result, num) => {
    if (num <= high && num >= low) {
      result += 1
    }
    return result
  }, 0)
}

module.exports = countNumbersBetween
