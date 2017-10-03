function perimeter(rectangle){
  var sideA = rectangle.height;
  var sideB = rectangle.width;
  var perimeter = (sideA*2 + sideB*2);
  return perimeter
};

module.exports = perimeter
