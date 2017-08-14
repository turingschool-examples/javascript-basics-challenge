function longestString(words) {
  if (words.length === 0) {
    return undefined
  } else {
    words.sort((a,b) => {
      return b.length - a.length
    })
    return words[0]
  }
}

var exports = module.exports = { longestString }