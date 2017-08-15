function area(rectangle) {
  return rectangle.length * rectangle.width;
};

function perimeter(rectangle) {
  return (rectangle.length * 2) + (rectangle.width * 2);
};

function diagonal(rectangle) {
  return Math.sqrt(Math.pow(rectangle.length, 2) + Math.pow(rectangle.width, 2));
};

function isSquare(rectangle) {
  if(rectangle.length == rectangle.width) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  area,
  perimeter,
  diagonal,
  isSquare
}
