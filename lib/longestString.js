module.exports = {longestString}

function longestString(array){
  longest = null
  array.forEach(function(string){
    if(longest === null || string.length > longest.length) {
      longest = string
    }
  })
  return longest
}
