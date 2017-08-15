function area(rectangle){
  return rectangle.width * rectangle.height;
};

function perimeter(rectangle){
  return (rectangle.width * 2) + (rectangle.height * 2);
};

function diagonal(rectangle){
  var sum = (Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2));
  return Math.sqrt(sum);
};

function isSquare(rectangle){
  return (rectangle.height === rectangle.width)
};

module.exports = {
                  area,
                  perimeter,
                  diagonal,
                  isSquare
                  }