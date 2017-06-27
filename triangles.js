function isTriangle(a,b,c){
  if(a <= 0 || b <= 0 || c <= 0){
    return false;
  }
  var sorted = [a,b,c].sort(function (x, y) {  return x - y;  });
  return sorted[0] + sorted[1] > sorted[2];
}
module.exports = {
  isTriangle
};
