function longestString(list) {
  if(list.length === 0) {
    return null;
  } else {
    return list.sort(function(a, b) {
      return b.length - a.length;
    })[0];
  }
}

module.exports = longestString
