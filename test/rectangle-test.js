assert = require('chai').assert;
const rectangleFunctions = require('../lib/rectangle')

describe('Chai tests rectangle functions', function() {
  it('can return area', function() {
    var rectangle = { width: 10, height: 20};
    assert.deepEqual(rectangleFunctions.area(rectangle), 200)
  })
  it('can return perimeter', function() {
    var rectangle = { width: 10, height: 20};
    assert.deepEqual(rectangleFunctions.perimeter(rectangle), 400)
  })
  it('can return diagonal', function() {
    var rectangle = { width: 10, height: 20};
    assert.deepEqual(rectangleFunctions.diagonal(rectangle), 22.360679774997898)
  })
  it('can return square?', function() {
    var rectangle1 = { width: 10, height: 20};
    var rectangle2 = { width: 10, height: 10};
    assert.isNotTrue(rectangleFunctions.square(rectangle1))
    assert.isTrue(rectangleFunctions.square(rectangle2))
  })
})
