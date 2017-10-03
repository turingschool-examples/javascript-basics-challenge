const pry = require('pryjs')

function longestString(arr) {
  var longest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if(longest < arr[i]) {
      longest = arr[i];
    };
  };
  return longest;
};

module.exports = longestString;
