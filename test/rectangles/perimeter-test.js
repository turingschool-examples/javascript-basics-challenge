const assert = require('chai').assert
const perimeterCalculator = require('../../lib/rectangles/perimeter.js')

describe('perimeterCalculator functionality', function() {
  context('perimeterCalculator function', function(){
    it('it can calculate the perimeter of a rectagle using two sides', function(){
      let rectangle = {
        width: 10,
        height: 20
      }
      let answer = perimeterCalculator(rectangle);
      assert.equal(answer, 60)

      rectangle = {
        width: 0,
        height: 20
      }
      answer = perimeterCalculator(rectangle);
      assert.equal(answer, null)


      rectangle = {
        width: 20,
        height: 20
      }
      answer = perimeterCalculator(rectangle);
      assert.equal(answer, 80)

      rectangle = {
        width: 10,
        height: 10
      }
      answer = perimeterCalculator(rectangle);
      assert.equal(answer, 40)

      rectangle = {
        width: 20,
        height: 5
      }
      answer = perimeterCalculator(rectangle);
      assert.equal(answer, 50)
    })
  })
})
