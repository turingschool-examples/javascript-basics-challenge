const rectangleF = require('../lib/rectangles.js')
const assert = require('chai').assert



describe('With a suite of geometric functions', function() {
  var rectangle = {width: 10, length: 20}

  it('can calcuate the area of a rectangle', function() {
    var actual = rectangleF.area(rectangle);
    var expected = 200;

    assert.equal(actual, expected);
  });

  it('can calcuate the perimeter of a rectangle', function() {
    var actual = rectangleF.perimeter(rectangle);
    var expected = 60;
    assert.equal(actual, expected);

  });

  it('can calcuate the diagonal of a rectangle', function() {
    var actual = rectangleF.diagonal(rectangle);
    var expected = Math.sqrt(500);
    assert.equal(actual, expected);

  });

  it('can determine if a shape is a square', function() {
    var square = {width: 10, length: 10}
    var notSquare = {width: 10, length: 20}

    assert.equal(rectangleF.isSquare(notSquare), false);
    assert.equal(rectangleF.isSquare(square), true);
  });

});
