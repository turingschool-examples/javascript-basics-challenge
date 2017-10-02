function area(rectangle) {
  return rectangle.width * rectangle.height
}

function perimeter(rectangle) {
  return 2 * (rectangle.width + rectangle.height)
}

function diagonal(rectangle) {
  var powerOf = Math.pow(rectangle.width, 2) + Math.pow(rectangle.height,2)
  return Math.round(Math.sqrt(powerOf));
}

function isSquare(rectangle) {
  if (rectangle.width === rectangle.height) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
                  area,
                  perimeter,
                  diagonal,
                  isSquare
                  }
