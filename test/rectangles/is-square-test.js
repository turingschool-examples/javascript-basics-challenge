const assert = require('chai').assert
const isSquare = require('../../lib/rectangles/is-square.js')

describe('isSquare functionality', function() {
  context('isSquare function', function(){
    it('it can determine if a rectange is a square', function(){
      let rectangle = {
        width: 3,
        height: 4
      }
      let answer = isSquare(rectangle);
      assert.equal(answer, false)

      rectangle = {
        width: 0,
        height: 20
      }
      answer = isSquare(rectangle);
      assert.equal(answer, null)

      rectangle = {
        width: 16,
        height: 63
      }
      answer = isSquare(rectangle);
      assert.equal(answer, false)

      rectangle = {
        width: 10,
        height: 10
      }
      answer = isSquare(rectangle);
      assert.equal(answer, true)

      rectangle = {
        width: 200000,
        height: 200000
      }
      answer = isSquare(rectangle);
      assert.equal(answer, true)

      rectangle = {
        width: 1,
        height: 1
      }
      answer = isSquare(rectangle);
      assert.equal(answer, true)
    })
  })
})
