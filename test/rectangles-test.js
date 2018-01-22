const expect = require('chai').expect
const RectangleFunctions = require('../rectangles')

describe("Rectangle functions", function() {

  beforeEach( function() {
    rectangle = {width: 10, height: 20}
  })

  context("area", function() {
    it("returns the area of a rectangle", function() {
      var expected = 200

      expect(RectangleFunctions.area(rectangle)).to.equal(expected)
    })
  })

  context("perimeter", function() {
    it("returns the perimeter of a rectangle", function() {
      var expected = 60

      expect(RectangleFunctions.perimeter(rectangle)).to.equal(expected)
    })
  })

  context("diagonal", function() {
    it("returns the diagonal of the rectangle", function () {
      var expected = Math.sqrt(500)

      expect(RectangleFunctions.diagonal(rectangle)).to.equal(expected)
    })
  })

  context("isSquare", function() {
    it("returns true if rectangle is square", function() {
      var square = {height: 10, width: 10}

      expect(RectangleFunctions.isSquare(square)).to.equal(true)
    })

    it("returns false if rectangle is not square", function() {
      expect(RectangleFunctions.isSquare(rectangle)).to.equal(false)
    })
  })
})
