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
})
