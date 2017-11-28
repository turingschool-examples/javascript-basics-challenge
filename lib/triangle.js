function isTriangle(a , b, c) {
  var sortedSides = [a, b, c].sort(function(a, b) {
    return a - b;
  });
  var short1 = sortedSides[0];
  var short2 = sortedSides[1];
  var long = sortedSides[2];
  if((short1 + short2) <= long) {
    return false;
  } else {
    return true;
  }
}

module.exports = isTriangle;