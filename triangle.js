
var isTriangle = function(a, b, c) {
  if ((a <= 0) || (b <= 0) || (c <= 0)) {
    return false;
  } else if (a == b && a == c) {
   return true;
  } else if ((a *  a) + (b * b) == (c * c)) {
    return true;
  } else if ((b * b) + (a * a) == (c * c)) {
    return true;
  } else if ((c * c) + (a * a) == (b * b)) {
    return true;
  } else if ((c * c) + (b * b) == (a * a)) {
    return true;
  } else {
    return false;
  }
};

exports.isTriangle = isTriangle;