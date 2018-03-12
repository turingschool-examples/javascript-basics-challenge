function isTriangle(a,b,c){
  if(a <= 0||b <= 0 ||c <= 0){
    return false
  } else if(a + b < c || b + c < a || c + a < b){
    return false
  } else {
    return true
  }
}

module.exports = {isTriangle: isTriangle}
