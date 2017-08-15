var pry = require('pryjs');
// eval(pry.it);

function validity_checker(a, b, c) {
  eval(pry.it);
};

function isTriangle(a, b, c) {

  let a_squared = Math.pow(a, 2);
  let b_squared = Math.pow(b, 2);
  let c_squared = Math.pow(c, 2);

  validity_checker(a_squared, b_squared, c_squared)
};



module.exports = {
  isTriangle
}
