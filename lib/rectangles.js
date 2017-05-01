function area(rectangle){
  return rectangle.width * rectangle.height;
}

function perimeter(rectangle){
  return 2 * rectangle.width + 2 * rectangle.height;
}

function diagonal(rectangle){
  return Math.floor(Math.sqrt(Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2)));
}
function isSquare(rectangle){
  return rectangle.width == rectangle.height;
}

module.exports.area = area;
module.exports.perimeter = perimeter;
module.exports.diagonal = diagonal;
module.exports.isSquare = isSquare;
