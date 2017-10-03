var pry = require('pryjs');

module.exports = {longestString}

function longestString(strings) {
  var longest = strings.sort(function (a, b) {
    return b.length - a.length; }
  )[0];
  return longest
};
