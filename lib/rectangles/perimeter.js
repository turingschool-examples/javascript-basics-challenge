const pry = require('pryjs');
function perimeter(rectangle) {
  return (rectangle['width'] * 2) + (rectangle['height'] * 2);
};
module.exports = perimeter;
