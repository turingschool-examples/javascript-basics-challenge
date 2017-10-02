function isTriangle(x, y, z){
  return ((x + y) > z) && ((x + z) > y) && ((y + z) > x)
};

module.exports.isTriangle = isTriangle

