
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

const isTriangle = (...dimensions) => {
  if (anyEqual(dimensions, 0)) return false
  if (anyLessThan(dimensions, 0)) return false

  if (dimensions[0] === dimensions[1] && dimensions[1] === dimensions[2]) return true

  return (squared(dimensions[0]) + squared(dimensions[1]) === squared(dimensions[2]))
}

module.exports = isTriangle
