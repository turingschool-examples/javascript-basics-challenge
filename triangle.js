

function isTriangle(num1, num2, num3) {
  if(num1 === 0 || num2 === 0 || num3 === 0) {
    return false
  }
  if(num1 < 0 || num2 < 0 || num3 < 0) {
    return false
  }
  if(num1 + num2 < num3 || num2 +num3 < num1 || num3 + num1 < num2){
    return false
  }
  else {
    return true
  }
}




module.exports = {isTriangle : isTriangle}
