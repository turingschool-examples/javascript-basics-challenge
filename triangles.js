var pry = require('pryjs');

function isTriangle(a,b,c) {
  if(a <= 0 || b <= 0 || c <= 0) {
    return false;
  } else if (a === b === c) {
    return true;
  } else if ((a + b >= c) && (b + c >= a) && (c + a >= b)) {
    return true;
  } else {
    return false;
  }
};

module.exports = isTriangle
