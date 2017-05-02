const assert = require('chai').assert
const triangle = require('../triangles')

describe('triangle', function(){
  it('determines if arguments are valid', function(){
    assert.equal(triangle.sidesValid(0, 10, 20), false)
    assert.equal(triangle.sidesValid(10, 0, 20), false)
    assert.equal(triangle.sidesValid(10, 20, 0), false)
    assert.equal(triangle.sidesValid(-5, 10, 20), false)
    assert.equal(triangle.sidesValid(10, -5, 20), false)
    assert.equal(triangle.sidesValid(10, 20, -5), false)
    assert.equal(triangle.sidesValid(10, 20, 30), true)
  });

  it('determines if the sides create a valid triangle', function(){
    assert.equal(triangle.isTriangle(4, 4, 4), true)
    assert.equal(triangle.isTriangle(6, 8, 10), true)
    assert.equal(triangle.isTriangle(4, 8, 50), false)
  });
});