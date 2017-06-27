/*jshint esversion: 6 */

function longestString(strings) {
  map = {};
  strings.forEach(function(string) {
    map[string] = string.length;
  });

  var stringValues = Object.keys(map).map(function(key) {
    return map[key];
  });

  var max = Math.max.apply(null, stringValues);
  return Object.keys(map).find(key => map[key] === max);
}

module.exports = longestString;
