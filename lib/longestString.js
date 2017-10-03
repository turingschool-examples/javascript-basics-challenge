module.exports = longestString

function longestString(strings) {
  var longest = ""
  for (var i = 0; i < strings.length; i++) {
    if (longest.split("").length < (strings[i].split("")).length) {
      longest = strings[i];
    }
  }
  return longest;
}
