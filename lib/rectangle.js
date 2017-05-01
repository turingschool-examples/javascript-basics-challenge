var pry = require('pryjs');

function area(rectangle) {
  return rectangle.width * rectangle.height;
}

function perimeter(rectangle) {
  return 2 * (rectangle.width + rectangle.height);
};

function diagonal(rectangle) {
  return (Math.sqrt(Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2))).toFixed(2)
}

function isSquare(rectangle) {
  if (rectangle.width == rectangle.height) {
  return true
} else {
  return false
}}

module.exports = {area: area, perimeter: perimeter, diagonal: diagonal, isSquare: isSquare}
