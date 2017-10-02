function area(shape) {
 return shape.height * shape.width;
};

function perimeter(shape){
  return (shape.height + shape.width) * 2;
};

function diagonal(shape){
  return Math.sqrt(Math.pow(shape.width, 2) + Math.pow(shape.height, 2));
};

module.exports = {
  area: area,
  perimeter: perimeter,
  diagonal: diagonal
}
