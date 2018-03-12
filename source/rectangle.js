pry = require('pryjs')

function area(rectangle) {
  return (Object.values(rectangle)[0]) * (Object.values(rectangle)[1])
}

function perimeter(rectangle) {
  var sideA = (Object.values(rectangle)[0])
  var sideB = (Object.values(rectangle)[1])
  return (sideA * 2) + (sideB * 2)
}

function diagonal(rectangle) {
  var squareSideA = Math.pow((Object.values(rectangle)[0]), 2);
  var squareSideB = Math.pow((Object.values(rectangle)[1]), 2);
  return Math.floor(Math.sqrt(squareSideA + squareSideB));
}

function isSquare(rectangle) {
  return ((Object.values(rectangle)[0]) === (Object.values(rectangle)[1]) ? true : false)
}

module.exports = {
   area,
   perimeter,
   diagonal,
   isSquare
}
