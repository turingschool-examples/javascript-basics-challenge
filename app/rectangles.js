exports.area = function(rectangle) {
  return rectangle.width * rectangle.height;
}

exports.perimeter = function(rectangle) {
  return rectangle.width * 2 + rectangle.height * 2;
}

exports.diagonal = function(rectangle) {
  return Math.sqrt(rectangle.width * rectangle.width + rectangle.height * rectangle.height);
}

exports.isSquare = function(rectangle) {
  if (rectangle.width === rectangle.height) {
    return true;
  }
  else {
    return false;
  }
}
