function area(shape) {
  return shape.width * shape.height;
};

function perimeter(shape) {
  return (shape.width + shape.height) * 2;
};

function diagonal(shape) {
  return Math.sqrt(Math.pow(shape.width, 2) + Math.pow(shape.height, 2));
};

function isSquare(shape) {
  return (shape.width === shape.height);
};

module.exports = {
  area: area,
  perimeter: perimeter,
  diagonal: diagonal,
  isSquare: isSquare
}
