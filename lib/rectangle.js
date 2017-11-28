function area(rectangle) {
  return rectangle.width * rectangle.height;
}

function perimeter(rectangle) {
  return (rectangle.height * rectangle.width) * 2;
}

function diagonal(rectangle) {
  var area = Math.pow(rectangle.height, 2) + Math.pow(rectangle.width, 2)
  return Math.sqrt(area)
}

function square(rectangle) {
  return rectangle.width === rectangle.height
}

module.exports = {
  area,
  perimeter,
  diagonal,
  square
}
