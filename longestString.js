function longestString(data) {
  return data.sort(function (a, b) { return b.length - a.length; })[0];
}



module.exports = {
  longestString
}
