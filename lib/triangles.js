module.exports = Triangles
const Rectangles = require('./rectangles')

function Triangles(lengthOne, legnthTwo, lengthThree) {
  var lengths = [lengthOne, legnthTwo, lengthThree].sort
  this.allPositivie = function() {
    if (lengths[0] <= 0 || lengths[1] <= 0 || lengths[2] <= 0) {
      return false
    } else {
      return true
    }
  }
  this.hypot = function(lengths) {
    if ((Math.pow(lengths[0], 2) + Math.pow(lengths[1], 2)) == Math.pow(lengths[3], 2)) {
      return true;
    } else {
      return false;
    }
  }
  this.isTriangle = function (lengthOne, legnthTwo, lengthThree) {
    sideA = Math.floor((lengthOne + legnthTwo));
    sideB = Math.floor((lengthOne + lengthThree));
    sideC = Math.floor((legnthTwo + lengthThree));

    if (sideA > lengthThree && sideB > legnthTwo && sideC > lengthOne) {
      return true;
    }
    if ( this.hypot(lengths) && this.allPositivie) {
      return true;
    } else {
      return false;
    }
  }
}
