// var rectangle = {width: 10, height: 20}
// You're expected to write the following functions:

// area(rectangle) - returns the area of the rectangle
// perimeter(rectangle) - returns the perimeter of the rectangle
// diagonal(rectangle) - returns the length of the rectangle's diagonal
// isSquare(rectangle) - returns true if the rectangle is a square and false otherwise

let assert    = require('chai').assert
let rectangle = require('../rectangle')

describe('Rectangle', () => {
  context('functions return properties', () => {
    it('returns area', () => {
      let shape = rectangle.prototype(10, 20)
      assert(shape.area, 200)
    })

    it('returns perimeter', () => {
      let shape = rectangle.prototype(10, 20)
      assert(shape.perimeter, 60)
    })

    it('returns diagonal', () => {
      let shape = rectangle.prototype(3,4)
      assert(shape.diagonal, 5)
    })
  })

  context('rectangle is a square', () => {
    it('returns true', () => {
      let shape = rectangle.prototype(3,3)
      assert(shape.isSquare, true)
    })

    it('returns false', () => {
      let shape = rectangle.prototype(2,3)
      assert(shape.isSquare, false)
    })
  })
})