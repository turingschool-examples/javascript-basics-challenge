var rectangle = {width: 10, height: 20};


function area(req){
  return req.width * req.height;
}

function perimeter(req){
  return ((req.width * 2) + (req.height * 2));
}

function diagonal(req){
  var sideOne = (req.width * req.width);
  var sideTwo = (req.height * req.height);
  var sideThree = (sideOne + sideTwo);
  return sideThree;
}

module.exports = area;
