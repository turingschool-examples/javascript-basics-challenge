function isTriangle(a, b, c) {
  if (a <= 0 && b <= 0 && c <= 0) {
    return false;
  } else if (a + b > c && b + c > a && a + c > b) {
    return true
  } else {
    return false
  }
}

module.exports = isTriangle
