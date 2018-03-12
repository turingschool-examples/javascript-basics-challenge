pry = require('pryjs')

function sideA(rectangle) {
  return (Object.values(rectangle)[0])
}

function sideB(rectangle) {
  return (Object.values(rectangle)[1])
}

function area(rectangle) {
  return sideA(rectangle) * sideB(rectangle)
}

function perimeter(rectangle) {
  return (sideA(rectangle) * 2) + (sideB(rectangle) * 2)
}

function diagonal(rectangle) {
  var squareSideA = Math.pow(sideA(rectangle), 2);
  var squareSideB = Math.pow(sideB(rectangle), 2);
  return Math.floor(Math.sqrt(squareSideA + squareSideB));
}

function isSquare(rectangle) {
  return (sideA(rectangle) === sideB(rectangle) ? true : false)
}

module.exports = {
   area,
   perimeter,
   diagonal,
   isSquare
}
