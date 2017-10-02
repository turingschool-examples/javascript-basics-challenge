function isSquare(rectangle){
  sideA = rectangle.width;
  sideB = rectangle.height;
  if(sideA == sideB){
    return true
  }else{
    return false
  }
};

module.exports = isSquare
