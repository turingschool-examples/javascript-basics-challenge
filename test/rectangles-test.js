var assert = require('chai').assert;
const rectangles = require('../rectangles')

var rectangle = {w: 10, h: 30}
var squareRectangle = {w: 10, h: 10}

describe("rectangle", function() {
  context(".area", function() {
    it("returns width * height", function(){
      assert.equal(rectangles.area(rectangle), 300)
    });
  })

  context(".perimiter", function() {
    it("returns total perimiter", function() {
      assert.equal(rectangles.perimiter(rectangle), 80)
    })
  })

  context(".diagonal", function() {
    it("returns rectangle diagonal", function() {
      assert.equal(rectangles.diagonal(rectangle), 31.62)
    })
  })

  context(".isSquare", function() {
    it("returns true if rectangle is square", function(){
      assert(rectangles.isSquare(squareRectangle))
      assert.isFalse(rectangles.isSquare(rectangle))
    })
  })
})
