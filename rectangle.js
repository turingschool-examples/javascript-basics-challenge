var pry = require('pryjs')
var rectangle = {width: 10, height: 20}

function area(rectangle) {
  return rectangle.width * rectangle.height;
}

function perimeter(rectangle) {
  return (rectangle.width * 2) + (rectangle.height * 2);
}

module.exports = {area, perimeter}
