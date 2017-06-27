/*jshint esversion: 6 */

var pry = require('pryjs');

function timesTable(int) {
  var output = '';
  for(var i = 1; i <= int; i++) {
    var product = [];
    for(var n = 1; n <= int; n++) {
      product[n - 1] = (n * i);
    }

    for(var x = 0; x < product.length; x++) {
      output += product[x] + '';
    }
  }
  return output;
}

module.exports = timesTable;
