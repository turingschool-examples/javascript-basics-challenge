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

function isSquare(rectangle) {
	var width = rectangle.width;
	var height = rectangle.height;
  if (width == height) {
    return true;
  } else {
    return false;
  }
}

module.exports.area = area;
module.exports.perimeter = perimeter;
module.exports.diagonal = diagonal;
module.exports.isSquare = isSquare;
