const assert = require('chai').assert
const rectangleFunctions = require('../rectangles')

describe("Rectangles", function() {
    context("With a 10 X 20 rectangle", function() {
      var rectangle = {width: 10, height: 20}
    it("can return the area", function() {
      assert.equal(rectangleFunctions.area(rectangle), 200)
    })
    it("can return the perimeter", function() {
      assert.equal(rectangleFunctions.perimeter(rectangle), 60)
    })
    it("can return the length of the diagnal", function() {
      assert.equal(rectangleFunctions.diagonal(rectangle), 22.36)
    })
    it("can return whether the rectangle is a sqaure", function() {
      var a_square = {width: 10, height: 10}
      assert.isTrue(rectangleFunctions.isSquare(a_square))
      assert.isFalse(rectangleFunctions.isSquare(rectangle))
    })
  })
})
