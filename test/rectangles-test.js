const assert = require('chai').assert
const rectangle = require('../rectangles')

describe('rectangle', function(){
  it('calculates the area', function(){
    assert.equal(rectangle.area(10, 20), 200)
  });

  it('calculates the perimeter', function(){
    assert.equal(rectangle.perimeter(10, 20), 60)
  });

  it('calculates the diagonal', function(){
    assert.equal(rectangle.diagonal(3, 4), 5)
  });

	it('determines if the rectangle is a square', function(){
    assert.equal(rectangle.isSquare(10, 20), false)
    assert.equal(rectangle.isSquare(10, 10), true)
  });
});