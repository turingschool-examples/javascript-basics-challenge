function area(rectangle) {
  var width = rectangle.width;
  var height = rectangle.height;

  return width * height;
	}

function perimeter(rectangle) {
  var width = rectangle.width;
  var height = rectangle.height;

  return (width * 2) + (height * 2);
}

function diagonal(rectangle) {
  var width = rectangle.width;
  var height = rectangle.height;

  return Math.round(Math.sqrt((width * width) + (height * height)));
}

function isSquare(rectangle) {
  var width = rectangle.width;
  var height = rectangle.height;

  return width == height;
}

module.exports = {
  area,
  perimeter,
  diagonal,
  isSquare
};
