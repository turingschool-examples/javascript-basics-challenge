function isTriangle(x, y, z) {
  var a = (x + y > z)
  var b = (x + z > y)
  var c = (z + y > x)
  
  if (a && b && c) {
    return true
  } else {
    return false
  }
}

module.exports = isTriangle