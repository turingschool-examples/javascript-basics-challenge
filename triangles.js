function isTriangle(x, y, z) {
  if ((x <= 0) || (y <= 0) || (z <= 0))
    return false
  else if ((x + y < z) || (x + z < y) || (z + y < x))
    return false
  else
    return true
}

module.exports = isTriangle
