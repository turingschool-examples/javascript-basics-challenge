function convertToOldRoman(num) {
  var numerals = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1}
  var result = ""
  for (var i of Object.keys(numerals) ) {
      var q = Math.floor(num / numerals[i]);
      num -= (q * numerals[i])
      result += i.repeat(q);
    }
    return result;
}

module.exports = {
  convertToOldRoman
}
