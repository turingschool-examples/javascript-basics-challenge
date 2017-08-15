var pry = require('pryjs');
// eval(pry.it);

function validity_checker(a, b, c) {
  let inputs = [a, b, c];

  for (i = 0; i < inputs.length; i++) {
    if (inputs[i] == 0 || inputs[i] < 0) {
      return false
    }
  };
};

function coprimeChecker(a, b, c) {
  if (a + b != c) {
    return false
  }
}

function isTriangle(a, b, c) {

  if (validity_checker(a, b, c) == true && coprimeChecker(a, b, c) == false) {
    return equilateralChecker(a, b, c);
  } else {
    return coprimeChecker(a, b, c);
  };
};



module.exports = {
  isTriangle
}
