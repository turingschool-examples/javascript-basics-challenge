function isTriangle(a, b, c) {
  if (a === b && b === c && a === c) {
    return "true"
  }
  else if (a <= 0 || b <= 0 || c <= 0) {
    return "false"
  }
  else if ((a+b > c) && (a+c > b) && (b+c > a)) {
    return "true"
  }
  else {
    return "false"
  }
}

module.exports = isTriangle
