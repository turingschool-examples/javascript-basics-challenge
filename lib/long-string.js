const pry = require('pryjs')

function longestString(array){
  let longest = array[0]
  let highestLetterCount = array[0].length

  array.forEach((word) => {
    if(word.length > highestLetterCount){
      longest = word
    }
  })

  return longest
}

module.exports = longestString
