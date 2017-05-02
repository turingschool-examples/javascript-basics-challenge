function rectangleArea(rectangle) {
  return rectangle.width * rectangle.height;
}

function rectanglePerimeter(rectangle) {
  return 2 * (rectangle.width + rectangle.height);
}

function rectangleDiagonal(rectangle) {
  var num  = rectangle.height*2 + rectangle.width*2
  return Math.sqrt(num)
}

function rectangleSquare(rectangle) {
  if(rectangle.height == rectangle.width) {
    return true;
  } else {
    return false;
  }
}


module.exports = {rectangleArea, rectanglePerimeter, rectangleDiagonal, rectangleSquare}
