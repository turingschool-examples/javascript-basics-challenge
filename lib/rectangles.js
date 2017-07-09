function area(r) {
  return r.width * r.height
}

function perimeter(r) {
  return (r.width * 2) + (r.height * 2)
}

function diagonal(r) {
  return round(Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)), 2)
}

function isSquare(r) {
  if (r.width == r.height) {
    return true
  } else {
    return false
  }
}

function round(num, places) {
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}

module.exports = {
    area,
    perimeter,
    diagonal,
    isSquare
}