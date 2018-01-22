var longestString = function(strings) {
 first = strings.sort(function (a, b) { 
   return b.length - a.length; 
  })[0];
  return first;
}

module.exports = {longestString};