module.exports = {
  area: function area(rectangle) {
    return (rectangle.width * rectangle.height);
  },

  perimeter: function perimeter(rectangle) {
    return (2 * (rectangle.width + rectangle.height));
  },
  
  diagonal: function diagonal(rectangle) {
    return Math.sqrt(Math.pow(rectangle.width,2) + Math.pow(rectangle.height,2));
  },
  
  isSquare: function isSqaure(rectangle){
    if(rectangle.width === rectangle.height){
      return true
    }
    else {
      return false
    }
  }
}


