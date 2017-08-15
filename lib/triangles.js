var pry = require('pryjs');
// eval(pry.it);

function validity_checker(a, b, c) {
  let inputs = [a, b, c];
  //
  // if (a == b && b == c) {
  //   return true
  // } else if (a + b == c) {
  //   return true
  // } else {
  //   return false
  // }
};

function isTriangle(a, b, c) {

  return validity_checker(a, b, c)
};



module.exports = {
  isTriangle
}
