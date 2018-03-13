function longestString(strings){
  return strings.sort(function(a,b){
    return b.length - a.length;
  })[0];
}

module.exports = {longestString: longestString}
