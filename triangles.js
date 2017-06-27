function isTriangle(num1, num2, num3){
  if(num1 <= 0 || num2 <= 0 || num3 <= 0){
    return false
  } else if (num1 === num2 === num3){
    return true
  } else if ((num1  + num2) > num3){
    return true
  }else {
    return false
  }
}

module.exports = {
  isTriangle
}