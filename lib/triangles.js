

function isTriangle(arg1, arg2, arg3) {
  if(arg1 <= 0  || arg2 <= 0 || arg3 <= 0 ) {
    return false
  }
  if(arg1 + arg2 < arg3 || arg2 + arg3 < arg1 || arg1 + arg3 < arg2) {
    return false
  }
  else {
    return true
  }
}



module.exports = { isTriangle:isTriangle }
