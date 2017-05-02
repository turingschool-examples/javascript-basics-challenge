function isTriangle(sideOne, sideTwo, sideThree){
  if(sideOne == 0 || sideTwo == 0 || sideThree == 0){
    return false;
  }
  else if(sideOne < 0 || sideTwo < 0 || sideThree < 0){
    return false;
  }
  else if(sideOne == sideTwo && sideTwo == sideThree){
    return true;
  }
  else if(Math.pow(sideOne, 2) + Math.pow(sideTwo, 2) == Math.pow(sideThree, 2) || Math.pow(sideThree, 2) + Math.pow(sideTwo, 2) == Math.pow(sideOne, 2) || Math.pow(sideOne, 2) + Math.pow(sideThree, 2) == Math.pow(sideTwo, 2)){
    return true;
  }
  else if(sideOne == sideTwo || sideOne == sideThree || sideTwo == sideThree){
    return true;
  }
  else{
    return false;
  }
}

module.exports.isTriangle = isTriangle;
