const assert = require('chai').assert
const diagonalCalculator = require('../../lib/rectangles/diagonal.js')

describe('diagonalCalculator functionality', function() {
  context('diagonalCalculator function', function(){
    it('it can calculate the diagonal of a rectagle using two sides', function(){
      let rectangle = {
        width: 3,
        height: 4
      }
      let answer = diagonalCalculator(rectangle);
      assert.equal(answer, 5)

      rectangle = {
        width: 0,
        height: 20
      }
      answer = diagonalCalculator(rectangle);
      assert.equal(answer, null)

      rectangle = {
        width: 16,
        height: 63
      }
      answer = diagonalCalculator(rectangle);
      assert.equal(answer, 65)

      rectangle = {
        width: 39,
        height: 80
      }
      answer = diagonalCalculator(rectangle);
      assert.equal(answer, 89)

      rectangle = {
        width: 20,
        height: 5
      }
      answer = diagonalCalculator(rectangle);
      assert.equal(Math.floor(Math.pow(answer, 2)), 425)
    })
  })
})
