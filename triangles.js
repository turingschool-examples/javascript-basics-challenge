function isTriangle(a, b, c) {
  if(sidesValid(a,b,c) == false) return false;
  if(a + b <= c) return false;
  if(a + c <= b) return false;
  if(b + c <= a) return false;
  return true
}

function sidesValid(a, b, c) {
  if(a < 1) return false;
  if(b < 1) return false;
  if(c < 1) return false;
  return true
}

module.exports = {
  sidesValid,
  isTriangle
}