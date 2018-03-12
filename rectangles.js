function area(rec){
  return rec.width * rec.height;
}

function perimeter(rec){
  return (rec.width * 2) + (rec.height * 2);
}

module.exports = {area: area, perimeter: perimeter}
