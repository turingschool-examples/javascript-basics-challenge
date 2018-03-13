
let stringArray = ['horses', 'cats', 'pineapples']



function longestString(stringArray) {
  let winningString = stringArray.sort(function (a, b) {
    return (a.length > b.length) ? -1 : 1
  })
return (winningString[0]) ? winningString[0] : null
}

console.log(longestString(['horses', 'cats', 'pineapples']))

module.exports = {longestString: longestString}