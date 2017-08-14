
const squared = (num) => {
  return num * num
}

const anyEqual = (arr, check) => {
  for(let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === check) { return true; }
  }
  return false
}

const anyLessThan = (arr, check) => {
  for(let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] < check) { return true; }
  }
  return false
}

const compareNumbers = (a, b) => {
  return a - b;
}

const passesPythagorean = (dimensions) => {
  return (squared(dimensions[0]) + squared(dimensions[1]) === squared(dimensions[2]))
}

const allEqual = (arr) => {
  return arr.every( v => v === arr[0] )
}

const isTriangle = (...dimensions) => {
  if (anyEqual(dimensions, 0)) return false
  if (anyLessThan(dimensions, 0)) return false

  if (allEqual(dimensions)) return true
  dimensions.sort(compareNumbers)
  return passesPythagorean(dimensions)
}

module.exports = isTriangle
