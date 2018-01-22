var isTriangle = function(a,b,c) {
  const legs = a*a + b*b ;
  if (c*c === legs) {
    return true;
  } else {
    return false;
  }
}

module.exports = {isTriangle}