function isTriangle(x, y, z) {
  var a = (x + y > z)
  var b = (x + z > y)
  var c = (z + y > x)
  
  if (x <= 0 || y <= 0 || z <= 0) {
    return false
  } else if (a && b && c) {
    return true
  } else {
    return false
  }
}

module.exports = isTriangle