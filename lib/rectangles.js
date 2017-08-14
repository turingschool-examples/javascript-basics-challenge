function area(l, w) {
  return l * w;
};

function perimeter(l, w) {
  return (l * 2) + (w * 2);
};

function diagonal(l, w) {
  return Math.sqrt(Math.pow(l, 2) + Math.pow(w, 2));
};

function isSquare(l, w) {
  if(l == w) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  area,
  perimeter,
  diagonal,
  isSquare
}
