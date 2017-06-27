
// function Rectangle (width, height) {
//   this.checkAvailability = function () {


function area(rectangle){
  var result = rectangle.width * rectangle.height;
  console.log("Rectangle width = " + rectangle.width + " height = " + rectangle.height);
  console.log("Area of the rectangle = " + result);
  return result
}
area({width: 10, height: 20})

function perimeter(rectangle){
  var result = 2 * (rectangle.width + rectangle.height);
  console.log("Perimeter of the rectangle = " + result);
  return result
}
perimeter({width: 10, height: 20})

function diagonal(rectangle){
  var result = (rectangle.width * rectangle.width) + (rectangle.height * rectangle.height);
  result = Math.sqrt(result)
  console.log("diagonal of the rectangle = " + result);
  return result
}
diagonal({width: 10, height: 20})

function isSquare(rectangle){
  var result;
  if (rectangle.width === rectangle.height){
    reuslt = true  
  }
  else {
    result = false
  }
  console.log("isSquare of the rectangle = " + result);
  return result
}
isSquare({width: 10, height: 20})

module.exports = {
  area: area,
  perimeter: perimeter,
  diagonal: diagonal,
  isSquare: isSquare
}