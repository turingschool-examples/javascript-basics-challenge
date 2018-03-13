pry = require('pryjs')

function isTriangle(sideA, sideB, sideC) {
  if (sideA + sideB >= sideC &&
     sideB + sideC >= sideA &&
     sideA + sideC >= sideB) {
       return true
     } else {
       return false
     }
}

module.exports = isTriangle
