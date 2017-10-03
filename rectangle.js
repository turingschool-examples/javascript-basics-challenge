var pry = require('pryjs')
var rectangle = {width: 10, height: 20}

function area(rectangle) {
  return rectangle.width * rectangle.height;
}

function perimeter(rectangle) {
  return (rectangle.width * 2) + (rectangle.height * 2);
}

function diagonal(rectangle) {
  var widthSquared = (rectangle.width * rectangle.width)
  var heightSquared = (rectangle.height * rectangle.height)
  return Math.sqrt(widthSquared + heightSquared);
}

function isSquare(rectangle) {
  if (rectangle.width == rectangle.height) {
    return true;
  } else {
    return false;
  }
}

module.exports = {area, perimeter, diagonal, isSquare}
