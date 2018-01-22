var area = function(rectangle) {
  return rectangle.width * rectangle.height;
}

var perimeter = function(rectangle) {
  return rectangle.width * 2 + rectangle.height * 2
}

var diagonal = function(rectangle) {
  const a = Math.pow(rectangle.height, 2) + Math.pow(rectangle.width, 2);
  return Math.round(Math.pow(a, 0.5), 1);
}

var isSquare = function(rectangle) {
  if (rectangle.width === rectangle.height) {
    return true;
  } else {
    return false;
  }
}

module.exports = {area, perimeter, diagonal, isSquare};