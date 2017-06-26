var pry = require('pryjs');

function isTriangle(side1, side2, side3) {
  if(side1 <= 0 && side2 <= 0 && side3 <= 0) {
    return false;
  }
  else if((side1 + side2) < side3) {
    return false;
  }
  else if((side2 + side3) < side1) {
    return false;
  }
  else if((side1 + side3) < side2) {
    return false;
  }
  else {
    return true;
  }
}

module.exports = {
  isTriangle
};
