function diagonal(rectangle){
  var sideA = rectangle.width;
  var sideB = rectangle.height;
  var diagonal = Math.sqrt(Math.pow(sideA,2) + Math.pow(sideB,2));
  return Math.round(diagonal)
}

module.exports = diagonal;
