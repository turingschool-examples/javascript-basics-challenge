function area(rectangle) {
  var totalArea = rectangle.width * rectangle.height;
  return totalArea;
};

function perimeter(rectangle) {
  var perimeter = 2 * (rectangle.width + rectangle.height);
  return perimeter;
};

function diagonal(rectangle) {
  var diagonal = Math.sqrt((rectangle.width * rectangle.width) + (rectangle.height * rectangle.height));
  return diagonal;
};

function isSquare(rectangle) {
  return rectangle.height == rectangle.width;
};

module.exports = {area, perimeter, diagonal, isSquare};
