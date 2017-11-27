const assert = require('chai').assert;
const recs = require('../rectangles')

var rectangle = {width: 10, height: 20}

describe("area", function() {
  it("can tell the area of a rectangle", function() {
    assert.deepEqual(recs.area(rectangle), 200)
  })
})

describe("perimeter", function() {
  it("can tell the perimeter of a rectangle", function() {
    assert.deepEqual(recs.perimeter(rectangle), 60)
  })
})

describe("diagonal", function() {
  it("can tell the diagonal of a rectangle", function() {
    assert.deepEqual(recs.diagonal(rectangle), 22.360679774997898)
  })
})

describe("isSquare", function() {
  it("can tell if a rectangle is a square", function() {
    assert.deepEqual(recs.isSquare(rectangle), false)
  })
})
