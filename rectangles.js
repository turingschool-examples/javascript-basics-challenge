function area(rec){
  return rec.width * rec.height;
}

function perimeter(rec){
  return (rec.width * 2) + (rec.height * 2);
}

function diagonal(rec){
  var summedSquares = Math.pow(rec.width, 2) + Math.pow(rec.height, 2);
  return Math.sqrt(summedSquares);
}

module.exports = {area: area, perimeter: perimeter, diagonal: diagonal}
