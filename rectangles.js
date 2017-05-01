function area(rectangle){
  return rectangle.width * rectangle.height
}


function perimeter(rectangle){
  return (rectangle.width + rectangle.height) * 2
}

function diagonal(rectangle){
  return Math.sqrt(Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2));
}

function isSquare(rectangle){
  if(rectangle.width == rectangle.height){
    return true
  };
};

module.exports.area = area;
module.exports.perimeter = perimeter;
module.exports.diagonal = diagonal;
module.exports.isSquare = isSquare;
