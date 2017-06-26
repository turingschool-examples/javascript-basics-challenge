const pry = require('pryjs')

const isTriangle = (a, b, c) => {
  let array = [a, b, c]
  let sorted = sort(array)
  if (a <= 0 || b <= 0 || c <= 0) {
    return false
  } else if (sorted[0]**2 + sorted[1]**2 == sorted[2]**2) {
    return true
  } else if(sorted[0] == sorted[1] && sorted[1] == sorted[2]) {
    return true
  } else {
    return false
  }
}

const sort = (array) => {
  do {
    swapped = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let holder   = array[i]
        array[i]     = array[i + 1]
        array[i + 1] = holder
        swapped = true
      }
    }
  } while (swapped)
  return array

}

module.exports = isTriangle
