function area(rectangle) {
  var totalArea = rectangle.width * rectangle.height;
  return totalArea;
};

function diagonal(rectangle) {
  var squaredSides = Math.pow(rectangle.height, 2) + Math.pow(rectangle.width, 2)
  return Math.sqrt(squaredSides);
};

function perimeter(rectangle) {
  var totalPerimeter = ((rectangle.width * 2) + (rectangle.height * 2));
  return totalPerimeter;
};

function isSquare(rectangle) {
  if (rectangle.width === rectangle.height) {
    return true
  } else {
    return false
  }
};

module.exports = {
  area,
  diagonal,
  perimeter,
  isSquare
}
