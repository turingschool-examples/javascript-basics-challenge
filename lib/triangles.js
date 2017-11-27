isTriangle = (side1, side2, side3) => {
  if(side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2){
    return true
  }else{
    return false
  }
}

module.exports = isTriangle;
