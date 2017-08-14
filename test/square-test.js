const assert = require('chai').assert
const square = require('../Square.js')

describe('Square', () => {
  context( 'when created', () => {
    it('it is a square', () => {
      const mySquare = new square({width: 10, height: 20})
      assert.instanceOf(mySquare, square);
    })

    it('has a width', () => {
      const mySquare = new square({width: 10, height: 20})
      assert.equal(mySquare.width, 10)
    })

    it('has a height', () => {
      const mySquare = new square({width: 10, height: 20})
      assert.equal(mySquare.height, 20)
    })
  })
  
  context ('.area()', () => {
    it('it can return the area of the rectangle', () => {
      const mySquare = new square({width: 10, height: 20})
      assert.equal(mySquare.area(), 200)
    })
  })

  context ('.perimeter()', () => {
    it('it can return the perimeter of the rectangle', () => {
      const mySquare = new square({width: 10, height: 20})
      assert.equal(mySquare.perimeter(), 60)
    })
  })

  context ('.diagonal()', () => {
    it('it can return the length of the diagonal of the rectangle', () => {
      const mySquare = new square({width: 10, height: 20})
      assert.equal(mySquare.diagonal(), 22.360679774997898)
    })
  })

  context ('.isSquare()', () => {
    it('it can return tell when it is a square', () => {
      const mySquare = new square({width: 10, height: 10})
      assert.isTrue(mySquare.isSquare())
    })

    it('it can return tell when it is not a square', () => {
      const mySquare = new square({width: 10, height: 11})
      assert.isFalse(mySquare.isSquare())
    })
  })
})
