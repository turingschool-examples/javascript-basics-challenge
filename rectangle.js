function area(rectangle) {
  return rectangle["width"] * rectangle["height"]
}

function perimeter(rectangle) {
  return (rectangle["width"] * 2) + (rectangle["height"] * 2)
}

function diagonal(rectangle) {

}

function isSquare(rectangle) {
  if(rectangle["width"] === rectangle["height"]) {
    return true;
  } else {
    return false;
  }
}

module.exports = area(rectangle)
module.exports = perimeter(rectangle)
module.exports = isSquare(rectangle)