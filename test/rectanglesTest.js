const assert = require('chai').assert
const rectangles = require('../lib/rectangle')

describe('Properties of a rectangle', () => {
  var rectangle = { width: 10, height: 20 }
  context('area function', () => {
    it('returns the area of a given rectangle', () => {
      assert(rectangles.area(rectangle), 200)
    })
  })

  context('perimiter funciton', () => {
    it('it returns the perimiter of a given rectangle', () => {
      assert(rectangles.perimiter(rectangle), 60)
    })
  })

  context('diagonal function', () => {
    it('it returns the diagonal lenght of a rectangle', () => {
      assert(rectangles.diagonal(rectangle), 30)
    })
  })

  context('isSquare function', () => {
    it('returns true if rectangle is a square', () => {
      assert.isNotTrue(rectangles.isSquare(rectangle))
    })
  })
})
