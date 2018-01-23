const assert = require('chai').assert
const rectangles = require('../lib/rectangles')

describe('Rectangles', function() {
  it('can calculate the area', function() {
    var rectangle = {width: 10, height: 20}
    assert.equal(rectangles.area(rectangle), 200)
  })

  it('can calclulate the perimeter', function() {
    var rectangle = {width: 10, height: 20}
    assert.equal(rectangles.perimeter(rectangle), 60)
  })

  it('can calculate a diagonal', function() {
    var rectangle = {width: 10, height: 20}
    assert.equal(rectangles.diagonal(rectangle), 22.360679774997898)
  })

  it('isSquare can calculate if an object IS NOT a square', function() {
    var rectangle = {width: 10, height: 20}
    assert.equal(rectangles.isSquare(rectangle), false)
  })

  it('isSquare can calculate if an object IS a square', function() {
    var rectangle = {width: 10, height: 10}
    assert.equal(rectangles.isSquare(rectangle), true)
  })
})

