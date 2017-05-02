var pry = require('pryjs');

function isTriangle(x, y, z){
  if (x <= 0 || y <= 0 || z <= 0) {
    return false
  } else if (x == y && y == z){
    return true
  } else if (x*x + y*y == z*z || y*y + z*z == x*x || x*x + z*z == y*y){
    return true
  } else {
    return false
  }
};

module.exports = { isTriangle }
