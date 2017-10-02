var pry = require('pryjs')
var rectangle = {width: 10, height: 20}

function area(rectangle) {
  return rectangle.width * rectangle.height;
}

module.exports = area
