
var pry = require('pryjs')


function area(rectangle){
  return rectangle.width * rectangle.height
};
function perimeter(rectangle){
  return rectangle.width * 2 + rectangle.height * 2
};
function diagonal(rectangle){
  return Math.sqrt((rectangle.width * rectangle.width) + (rectangle.height * rectangle.height)).toFixed(2)
};

function square(rectangle){
  if (rectangle.width == rectangle.height){
  return true
}
 return false
};

exports.area = area
exports.perimeter = perimeter
exports.diagonal = diagonal
exports.square = square
