const assert = require('chai').assert
const rectangle = require('../rectangles')

describe('rectangle', function(){
  it('area', function(){
    assert.equal(rectangle.area(10, 20), 200)
  });

  it('perimeter', function(){
    assert.equal(rectangle.perimeter(10, 20), 60)
  });

  it('diagonal', function(){
    assert.equal(rectangle.diagonal(3, 4), 5)
  });

	it('isSquare', function(){
    assert.equal(rectangle.isSquare(10, 20), false)
    assert.equal(rectangle.isSquare(10, 10), true)
  });
});