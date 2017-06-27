const longestString = (array) => {
  let first = array[0]
  array.forEach((x) => {
    let length = x.length
    if (length > longest.length) {
      longest = x
    }
  })
  return longest
}

module.exports = longestString
