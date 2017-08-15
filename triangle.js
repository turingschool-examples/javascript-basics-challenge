var pry = require('pryjs');

function isTriangle(a, b, c) {
 if (noZeros(a, b, c) && noNegatives(a, b, c)){
   return ((a+b > c) && (a+c > b) && (b+c > a));
 } else {
   return false;
 }
}

function noZeros(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false
  } else {
    return true
  }
}

function noNegatives(a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    return false
  } else {
    return true
  }
}

module.exports = {
                  isTriangle,
                  noNegatives,
                  noZeros
                  };