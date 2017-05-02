function area(rectangle){
  return rectangle.width * rectangle.height
};

function perimeter(rectangle){
  return (rectangle.width * 2) + (rectangle.height * 2)
};

function diagonals(rectangle){
  return Math.sqrt((rectangle.width * rectangle.width) + (rectangle.height * rectangle.height)).toFixed(2)
};

function isSquare(shape){
  if (shape.width == shape.height){
    return true
  } else{
    return false
  }
};
exports.area = area
exports.perimeter = perimeter
exports.diagonals = diagonals
exports.isSquare = isSquare
