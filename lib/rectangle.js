var pry = require('pryjs');

function area(rectangle) {
  var width = rectangle.width;
  var height = rectangle.height;
  return width * height;
}

function perimeter(rectangle) {
	var width = rectangle.width;
  var height = rectangle.height;
  return ( width * 2 ) + ( height * 2 );
}

function diagonal(rectangle) {
	var width = rectangle.width;
  var height = rectangle.height;
  return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
}

module.exports.area = area;
module.exports.perimeter = perimeter;
module.exports.diagonal = diagonal;
