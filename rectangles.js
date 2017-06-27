var pry = require('pryjs');

function area(dimensions) {
  return dimensions.h * dimensions.w
}

function perimiter(dimensions) {
  return (dimensions.h + dimensions.w) * 2
}

function diagonal(dimensions) {
  var result = Math.sqrt(Math.pow(dimensions.h, 2) + Math.pow(dimensions.w, 2))
  return result.toFixed(2)
}

function isSquare(d) {
  return d.w == d.h
}





module.exports = {
                area,
                perimiter,
                diagonal,
                isSquare
                }
