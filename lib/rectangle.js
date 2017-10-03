module.exports = {area, perimeter, diagonal, isSquare}

function area(rectangle){
  return rectangle["width"] * rectangle["height"];
};

function perimeter(rectangle) {
  return rectangle["width"] * 2 + rectangle["height"] * 2
}

function diagonal(rectangle) {
  sum_squares = rectangle["width"] * rectangle["width"] + rectangle["height"] * rectangle["height"]
  return Math.sqrt(sum_squares).toFixed(2);
}

function isSquare(rectangle) {
  return rectangle["width"] === rectangle["height"]
}
