function isTriangle(x, y, z) {
  var array = [x, y, z].sort()
  return x > 0 && y > 0 && z > 0 && (array[0] + array[1]) >= array[2];
}

module.exports = isTriangle
