
var pry = require('pryjs');

function factorial(number){
  var total = 1
  for(var i = number; i > 1; i--){
    total*=i
  }
  return total
}

module.exports = factorial