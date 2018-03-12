const assert = require('chai').assert
const [area, perimeter, diagonal, isSquare] = require("../lib/rectangles")

describe("rectangle object and menthods", () => {
  context("instance methods", () => {
    let rectangle = {width: 10, height: 20}
    it("area returns the area of the rectangle", () => {
      assert.equal(area(rectangle), 200)
    })

    it("perimeter returns the length of all sides", () => {
      assert.equal(perimeter(rectangle), 60)
    })

    it("diagonal returns the length of the diagonal", () => {
      assert.equal(diagonal(rectangle).toFixed(1), 22.4)
    })

    it("isSquare returns true if square", () => {
      let square = {width: 10, height: 10}

      assert.equal(isSquare(square), true)
    })

    it("isSquare returns false if not square", () => {
      assert.equal(isSquare(rectangle), false)
    })
  })
})


// 4. `isSquare(rectangle)` - returns `true` if the rectangle is a square and `false` otherwise
