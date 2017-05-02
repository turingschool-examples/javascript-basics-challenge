var pry = require('pryjs');

var area = function(rectangle) {
  return rectangle.width * rectangle.height
};

var perimeter = function(rectangle) {
  return (rectangle.width * 2) + (rectangle.height * 2)
};

var diagonal = function(rectangle) {
  var width_squared = (rectangle.width * rectangle.width);
  var height_squared = (rectangle.height * rectangle.height);
  return Math.sqrt(width_squared + height_squared);
};

var diagonal = function(rectangle) {
  var width_squared = (rectangle.width * rectangle.width);
  var height_squared = (rectangle.height * rectangle.height);
  return Math.sqrt(width_squared + height_squared);
};

var isSquare = function(rectangle) {
    if (rectangle.width == rectangle.height) {
      return true;
    } else {
      false;
    }
  };


exports.area = area;
exports.perimeter = perimeter;
exports.diagonal = diagonal;
exports.isSquare = isSquare;