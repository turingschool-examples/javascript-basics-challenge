const countNumbersBetween = (array, lower, upper) => {
  count = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] <= upper && array[i] >= lower) {
      count++
    }
  }
  return count
}

module.exports = countNumbersBetween
