const assert = require('chai').assert
const Rectangles = require('../lib/rectangles')

describe('Rectangles Methods', function() {
  var rectangles = new Rectangles();

  it("returns the correct area", function() {
    var rectangle = {width: 10, height: 20}
    var expected = rectangles.area(rectangle)


    assert.isFunction(Rectangles);
    assert.isObject(new Rectangles(rectangle))
    assert.equal(200, expected)
  })

  it("returns a different rectangles correct area", function() {
    var rectangle = {width: 1, height: 400}
    var expected = rectangles.area(rectangle)

    assert.equal(400, expected)
  })

  it("returns the correct perimeter", function() {
    var rectangle = {width: 10, height: 20}
    var expected = rectangles.perimeter(rectangle)

    assert.equal(60, expected)
  })

  it("returns the correct different rectangles perimeter", function() {
    var rectangle = {width: 40, height: 50}
    var expected = rectangles.perimeter(rectangle)

    assert.equal(180, expected)
  })

  it("returns the correct diaganol of a rectangle", function() {
    var rectangle = {width: 10, height: 20}
    var expected = rectangles.diaganol(rectangle)

    assert.equal(22.360679774997898, expected)
  })

  it("returns the correct different rectangles diaganol", function() {
    var rectangle = {width: 6, height: 8}
    var expected = rectangles.diaganol(rectangle)

    assert.equal(10, expected)
  })

  it("returns the correct true for isSquare", function() {
    var rectangle = {width: 6, height: 6}
    var expected = rectangles.isSquare(rectangle)

    assert(expected)
  })

  it("returns the correct true for isSquare for different rectangle", function() {
    var rectangle = {width: 10, height: 10}
    var expected = rectangles.isSquare(rectangle)

    assert(expected)
  })

  it("returns the correct false for isSquare", function() {
    var rectangle = {width: 6, height: 8}
    var expected = rectangles.isSquare(rectangle)

    assert.isFalse(expected)
  })
})
