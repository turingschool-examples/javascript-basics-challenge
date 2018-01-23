var longestString = function(strings) {
  if (strings.length === 0 ) return null;  
  first = strings.sort(function (a, b) { 
    return b.length - a.length; 
  })[0];
  return first;
}

module.exports = {longestString};