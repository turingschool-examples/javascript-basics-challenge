function area(rectangle) {
  return rectangle.width * rectangle.length;
}

function perimeter(rectanlge) {
  return 2 * (rectangle.length * rectangle.width)
}

function diagonal(rectanlge) {
  return Math.sqrt(Math.pow(rectangle.width, 2) + Math.pow(rectangle.length, 2))
}

function isSquare (rectangle) {
  if(rectangle.width == rectangle.length){
    return true
  }else{
    return false
  }
}

module.exports = {
  area
  // perimeter: perimeter,
  // diagonal: diagonal,
  // isSquare: isSquare
}
