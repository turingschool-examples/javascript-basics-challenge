class longestString {
  findLongest(arr) {
    if (this.zeroLength(arr)) {return null;}
    if (this.checkWords(arr)) {return "This only works with words.";}
    return this.longify(arr);

  }

  longify(arr) {
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

  checkWords(arr) {
    var status = false;
    arr.forEach(function(value) {
      if (typeof value !== 'string') {
        status = true;
      }
    })
    return status;
  }
}

module.exports = longestString;
