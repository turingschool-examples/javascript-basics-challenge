var rectangle = {width: 10, height: 20}


// area
function area(rectangle) {
  return rectangle.width * rectangle.height;
}

function perimeter(rectangle) {
  return (2 * rectangle.width) + (2 * rectangle.height);
}

function diagonal(rectangle) {
  return Math.sqrt(squaredRectangle(rectangle));
}

function squaredRectangle(rectangle) {
  return ( Math.pow(rectangle.height, 2) + Math.pow(rectangle.width, 2));
}

module.exports = { area:area, perimeter:perimeter, diagonal:diagonal}
