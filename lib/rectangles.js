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

module.exports = {
  area,
  perimiter,
  diagonal,
}
