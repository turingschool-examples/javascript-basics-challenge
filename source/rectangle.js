pry = require('pryjs')

function area(rectangle) {
  return (Object.values(rectangle)[0]) * (Object.values(rectangle)[1])
}

function perimeter(rectangle) {
  var sideA = (Object.values(rectangle)[0])
  var sideB = (Object.values(rectangle)[1])
  return (sideA * 2) + (sideB * 2)
}

module.exports = {
   area,
   perimeter
}
