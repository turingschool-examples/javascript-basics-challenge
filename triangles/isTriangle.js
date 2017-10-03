var pry = require("pryjs");

function isTriangle(a,b,c){
  if (hasZero(a,b,c)){
    return hasZero(a,b,c);
  }else if(hasNegative(a,b,c)){
    return hasNegative(a,b,c);
  }else if(isEquilateral(a,b,c)){
    return isEquilateral(a,b,c);
  }else if(isRightAngle(a,b,c)){
    return isRightAngle(a,b,c);
  }else{
    return true
  }
};

function hasNegative(a,b,c){
  if(a < 0 || b < 0 || c < 0){
    return "false, because a triangle can't have a negative dimension"
  }
};

function hasZero(a,b,c){
  if(a == 0 || b == 0 || c == 0){
    return "false, because a triangle can't have 0 length"
  }
};

function isEquilateral(a,b,c){
  if(a == b && b == c){
    return "true, this is an equilateral triangle";
  }
};

function isRightAngle(a,b,c){
  if(a == Math.sqrt(Math.pow(b,2) + Math.pow(c,2)) || b == Math.sqrt(Math.pow(a,2) + Math.pow(c,2)) || c == Math.sqrt(Math.pow(a,2) + Math.pow(b,2))){
    return "true, a right triangle!";
  }
};

module.exports = isTriangle
