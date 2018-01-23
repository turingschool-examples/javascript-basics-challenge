function Triangle(side1, side2, side3){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

function isTriangle(triangle){
  var squared1 = triangle.side1 * triangle.side1;
  var squared2 = triangle.side2 * triangle.side2;
  var squared3 = triangle.side3 * triangle.side3;

  if (triangle.side1 <= 0 || triangle.side2 <= 0 || triangle.side3 <= 0){
    return false;
  } else if (squared1 + squared2 === squared3 || squared3 + squared2 === squared1 || squared1 + squared3 === squared2) {
    return true;
  } else {
    return false;
  }
}
module.exports = { Triangle, isTriangle }