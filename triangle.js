function isTriangle(n1, n2, n3){
  if (n1 + n2 > n3 && n1 + n3 > n2 && n3 + n2 > n1) {
    return true
  } else {
    return false
  }
};


module.exports = {
  isTriangle: isTriangle
}
