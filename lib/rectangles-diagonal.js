function diagonal(rectangle){
   var diagonal = Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2);
   return Math.pow(diagonal, 2);
}
module.exports = diagonal;
