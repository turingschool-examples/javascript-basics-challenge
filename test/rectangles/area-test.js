const assert = require('chai').assert
const areaCalculator = require('../../lib/rectangles/area.js')

describe('areaCalculator functionality', function() {
  context('areaCalculator function', function(){
    it('it can calculate the area of a rectagle using two sides', function(){
      let rectangle = {
        width: 10,
        height: 20
      }
      let answer = areaCalculator(rectangle);
      assert.equal(answer, 200)

      rectangle = {
        width: 0,
        height: 20
      }
      answer = areaCalculator(rectangle);
      assert.equal(answer, null)


      rectangle = {
        width: 20,
        height: 20
      }
      answer = areaCalculator(rectangle);
      assert.equal(answer, 400)

      rectangle = {
        width: 10,
        height: 10
      }
      answer = areaCalculator(rectangle);
      assert.equal(answer, 100)

      rectangle = {
        width: 20,
        height: 0
      }
      answer = areaCalculator(rectangle);
      assert.equal(answer, null)
    })
  })
})
