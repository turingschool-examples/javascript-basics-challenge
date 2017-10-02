var pry = require("pryjs");

function isTriangle(a,b,c){
  var triangleChecks = [];
  triangleChecks.push(hasZero(a,b,c))
  triangleChecks.push(hasNegative(a,b,c))
  if(triangleChecks.includes(false)){
    return false
  }
  return true;
};

function hasNegative(a,b,c){
  if(a < 0 || b < 0 || c < 0){
    return false
  }
};

function hasZero(a,b,c){
  if(a == 0 || b == 0 || c == 0){
    return false
  }
};

module.exports = isTriangle
