const assert = require('chai').assert

const rectangle = require('../lib/rectangles');
const area = rectangle.area;
const perimeter = rectangle.perimeter;
const diagonal = rectangle.diagonal
const isSquare = rectangle.isSquare


describe("area", function() {
  context("with valid inputs", function() {
    it("outputs the calculated area of that rectangle", function() {
      var rectangle = {width: 10, height: 20}

      assert.equal(area(rectangle), 200)
    })
  })
})

describe("perimeter", function() {
  context("with valid inputs", function() {
    it("outputs the calculated perimeter of a rectangle", function() {
      var rectangle = {width: 10, height: 20}

      assert.equal(perimeter(rectangle), 60)
    })
  })
})

describe("diagonal", function() {
  context("with valid inputs", function() {
    it("outputs the length of the rectangle's diagonal", function() {
      var rectangle = {width: 10, height: 20}

      assert.equal(diagonal(rectangle), 22.36)      
    })
  })
})

describe("isSquare", function() {
  context("when inputed a square", function() {
    it("outputs true", function() {
      var rectangle = {width: 10, height: 10}
      
      assert.isTrue(isSquare(rectangle))
    })
  })
  context("when inputed a non-square", function() {
    it("outputs false", function() {
      var rectangle = {width: 20, height: 10}
      
      assert.isFalse(isSquare(rectangle))
    })
  })
})

