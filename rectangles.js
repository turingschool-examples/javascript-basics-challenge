var area = function(rectangle) {
  return rectangle.width * rectangle.height 
}

var perimeter = function(rectangle) {
  return (rectangle.width + rectangle.height) * 2
}

var diagonal = function(rectangle) {
  var squareWidth = Math.pow(rectangle.width, 2);
  var squareHeight = Math.pow(rectangle.height, 2);
  return Math.sqrt(squareWidth + squareHeight)
}

var isSquare = function(rectangle) {
  return rectangle.height === rectangle.width
}

module.exports = { area: area,
  perimeter: perimeter,
  diagonal: diagonal,
  isSquare: isSquare };
