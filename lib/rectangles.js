function area(rectangle) {
  return rectangle.height * rectangle.width
}

function perimeter(rectangle) {
  return 2 * (rectangle.height + rectangle.width)
}

function diagonal(rectangle) {
  var heightSquared = rectangle.height ** 2
  var widthSquared = rectangle.width ** 2
  return Math.sqrt(heightSquared + widthSquared)
}

function isSquare(rectangle) {
  return rectangle.height === rectangle.width ? true : false
}

module.exports = {
  area,
  perimeter,
  diagonal,
  isSquare
}
