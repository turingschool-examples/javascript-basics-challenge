function longestString(array) {
  let sorted = array.sort(function(a, b) {
    return b.length - a.length;
  });
  return sorted[0];
};

module.exports = {
  longestString: longestString
}
