var pry = require('pryjs');

var area = function(rectangle) {
  return rectangle["width"] * rectangle["height"];
}

module.exports = area;
