const pry = require('pryjs');
function mode(arr) {
  var count = {};
  var list = [];
  var mostFrequent = {};
  for (var i = 0; i < arr.length; i++) {
    if(count[arr[i]]) {
      count[arr[i]] ++;
    } else {
      count[arr[i]] = 1;
    };
  };
  for(var key in count) {
    list.push([count[key], key]);
  }
  list = list.sort().reverse();
  mostFrequent[list[0][1]] = list[0][0];
  return mostFrequent;
};

module.exports = mode;
