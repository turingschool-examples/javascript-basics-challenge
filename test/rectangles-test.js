const assert = require('chai').assert;
const rectangle = require('../rectangles')

describe('rectangle properties', function(){
    shape = {width: 10, height: 20}
  it('can calculate the area', function(){
    assert.equal(rectangle.area(shape), 200)
  });

  it ('can calculate the perimeter', function(){
    assert.equal(rectangle.perimeter(shape), 60)
  });

  it ('can calculate the diagonal', function(){
    shape2 = {width: 3, height: 4}
    assert.equal(rectangle.diagonal(shape2), 5)
  });

  it ('can determine if it is a square', function(){
    shape3 = {width: 4, height: 4}
    assert.equal(rectangle.isSquare(shape3), true)
    assert.equal(rectangle.isSquare(shape), false)
  });
});
