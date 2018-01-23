const expect = require('chai').expect;
const assert = require('chai').assert;
const rectangles = require('../scripts/rectangles');

describe('Rectangle functions', function() {
  it('returns the area of the rectangle', function() {
    var rectangle = { width: 10, height: 20 }
    assert.deepEqual(rectangles.area(rectangle), 200)
  })

  it('returns the perimeter of the rectangle', function() {
    var rectangle = { width: 10, height: 20 }
    assert.deepEqual(rectangles.perimeter(rectangle), 60)
  })

  it('returns the diagonal of the rectangle', function() {
    var rectangle = { width: 10, height: 20 }
    assert.deepEqual(rectangles.diagonal(rectangle), 22.360679774997898)    
  })

  it('returns true if the rectangle is a square', function() {
    var rectangle = { width: 10, height: 20 }
    assert.deepEqual(rectangles.isSquare(rectangle), false)
    var rectangle = { width: 10, height: 10 }
    assert.deepEqual(rectangles.isSquare(rectangle), true)
  })
})