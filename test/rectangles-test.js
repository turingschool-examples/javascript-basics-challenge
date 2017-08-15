const assert = require('chai').assert;
const rectangle = require('../scripts/rectangles');
const myRectangle = new rectangle(10, 20);

describe('Rectangle', () => {
  context('.area', () => {
    it('should return the area of the rectangle', () => {
      assert.deepEqual(myRectangle.area(), 200)
    })
  })

  context('.perimeter', () => {
    it('should return the perimeter of the rectangle', () => {
      assert.deepEqual(myRectangle.perimeter(), 60)
    })
  })

  context('.diagonal', () => {
    it('should return the length of the diagonal of the rectangle', () => {
      assert.deepEqual(myRectangle.diagonal(), 22.360679774997898)
    })
  })

  context('.isSquare', () => {
    it('should return true if the rectangle is square', () => {
      let mySquare = new rectangle(10, 10);
      assert.isTrue(mySquare.isSquare())
    })
  })

  context('.isSquare', () => {
    it('should return false if the rectangle is not square', () => {
      assert.isFalse(myRectangle.isSquare())
    })
  })

})
