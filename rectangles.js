
function area(rectangle) {
  return rectangle.width * rectangle.height;
}

function perimeter(rectangle) {
  return 2 * (rectangle.height * rectangle.width)
}


//Whats going on here
function diagonal(rectangle) {
  var diag = Math.sqrt(Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2))
  return Math.round(diag, -2)
}

function isSquare (rectangle) {
  if (rectangle.width == rectangle.height) {
    return true
  } else {
    return false
  }
}

module.exports = {
  area,
  perimeter,
  diagonal,
  isSquare
}

