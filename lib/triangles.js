function isTriangle(a, b, c) {
    let array = [a, b, c];
    if(array.sort()[0] < 0) {
      return false
    } else {
      return(a + b > c && a + c > b && b + c > a);
    }
}
module.exports = isTriangle;