const pry = require('pryjs');

var isTriangle = function(side1, side2, side3) {
  for (i = 0; i < 3; i++) {
    var sides = [side1, side2, side3];
    var side = sides.splice(i, 1);
    if (sides.reduce((a, b) => a + b, 0) <= side) { 
      return false; 
    }
  }
  return true
}

module.exports = isTriangle;
