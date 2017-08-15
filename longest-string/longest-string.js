class longestString {
  findLongest(arr) {
    var longest = "";
    arr.forEach(function(value) {
      if (value.length > longest.length) {
        longest = value;
      }
    })
    return longest;
  }
}

module.exports = longestString;
