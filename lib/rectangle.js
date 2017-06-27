function area(rectangle) {
  return rectangle.width * rectangle.height
}

function perimiter(rectangle) {
  return (rectangle.width * 2) + (rectangle.height * 2)
}

function diagonal(rectangle) {
  return Math.sqrt(Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2))
}

function isSquare(rectangle) {
  if (rectangle.width === rectangle.height) {
    return true
  } else {
    return false
  }
}

module.exports = {
  area,
  perimiter,
  diagonal,
  isSquare
}
