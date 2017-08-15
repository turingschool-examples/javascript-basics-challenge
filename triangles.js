function isTriangle(a, b, c) {
  if(a <= 0 || b <= 0 || c <= 0) {
    return false;
  } else if(a === b && b === c) {
    return true;
  } else {
    return (a ** 2 + b ** 2) === c ** 2 || (c ** 2 + b ** 2 === a ** 2) || (a ** 2 + c ** 2 === b ** 2);
  }
}

module.exports = isTriangle
