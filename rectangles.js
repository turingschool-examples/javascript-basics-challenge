var pry = require('pryjs')

var rectangle = {width: 10, height: 20}

//area function
function area(shape){
  return shape.width * shape.height;
}
console.log(area(rectangle))

//perimeter function
function perimeter(shape){
  return ((shape.width * 2) + (shape.height * 2))
}
console.log(perimeter(rectangle))

//diagonal function
function diagonal(shape) {
  return Math.sqrt(squareCalculate(shape))
}
//refactored out squareCalculation
function squareCalculate(shape) {
  return ((Math.pow(shape.width, 2)) + (Math.pow(shape.height, 2)))
}

//is quare calculation
function isSquare(shape) {
    if (shape.width === shape.height) {
      return true;
    }
    else return false;
}





// var rectangles = module.exports = {};
module.exports = {area: area, perimeter: perimeter, diagonal : diagonal, isSquare :isSquare}
