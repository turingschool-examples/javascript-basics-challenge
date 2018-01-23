exports.isTriangle = function(tri1, tri2, tri3) {
  if (tri1 <= 0 || tri2 <= 0 || tri3 <= 0) {
    return false;
  }
  else if (tri1 + tri2 > tri3 && tri1 + tri3 > tri2 && tri2 + tri3 > tri1) {
    return true;
  }
  else {
    return false;
  }
}
