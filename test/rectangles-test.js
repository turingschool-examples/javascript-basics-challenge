const assert = require('chai').assert
const rectangles = require('../rectangles')

describe("rectangles", function(){
  var rectangle = {width: 10, height: 20}
  var rectangle2 = {width: 5, height: 5}
  it("can find area", function(){
    assert.equal(rectangles.area(rectangle), 200)
  })
  it("can find perimeter", function(){
    assert.equal(rectangles.perimeter(rectangle), 60)
  })
  it("can find diagonal", function(){
    assert.equal(rectangles.diagonal(rectangle), 22.36)
  })
  it("can tell if it is a square", function(){
    assert.isFalse(rectangles.isSquare(rectangle))
    assert.isTrue(rectangles.isSquare(rectangle2))
  })
})