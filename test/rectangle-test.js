const assert    = require('chai').assert
const Rectangle = require('../rectangle')

describe('Rectangle', () => {
  context('functions return properties', () => {
    it('returns area', () => {
      let shape = new Rectangle(10, 20)
      assert(shape.area, 200)
    })

    it('returns perimeter', () => {
      let shape = new Rectangle(10, 20)
      assert(shape.perimeter, 60)
    })

    it('returns diagonal', () => {
      let shape = new Rectangle(3,4)
      assert(shape.diagonal, 5)
    })
  })

  context('rectangle is a square', () => {
    it('returns true', () => {
      let shape = new Rectangle(3,3)
      assert(shape.isSquare, true)
    })

    it('returns false', () => {
      let shape = new Rectangle(2,3)
      assert(shape.isSquare, false)
    })
  })
})