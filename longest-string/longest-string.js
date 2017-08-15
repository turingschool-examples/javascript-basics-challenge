class longestString {
  findLongest(arr) {
    if (this.zeroLength(arr)) {return null;}
    var longest = "";
    arr.forEach(function(value) {
      if (value.length > longest.length) {
        longest = value;
      }
    })
    return longest;
  }

  zeroLength(arr) {
    if (arr.length === 0) {
      return true;
    }
  }
}

module.exports = longestString;
