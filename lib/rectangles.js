pry = require('pryjs')

function area(rectangle) {
  return rectangle.length * rectangle.width
}

function perimiter(rectangle) {
  return (rectangle.length * 2) + (rectangle.width * 2)
}

function diagonal(rectangle) {
  return Math.sqrt((rectangle.length ** 2) + (rectangle.width ** 2))
}

function isSquare(rectangle) {
  if(rectangle.length === rectangle.width) {
    return true
  } else {
    return false
  }
}


module.exports = {
  area,
  perimiter,
  diagonal,
  isSquare,
}
