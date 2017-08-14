const compareLengths = (a, b) => {
  return b.length - a.length;
}

const longestString = (arr) => {
  arr.sort(compareLengths)
  return arr[0]
}

module.exports = longestString
