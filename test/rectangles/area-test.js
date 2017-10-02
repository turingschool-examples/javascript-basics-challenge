const assert = require('chai').assert
const areaCalculator = require('../../lib/rectangles/area.js')

describe('areaCalculator functionality', function() {
  context('areaCalculator function', function(){
    it('it can calculate the area of a rectagle using two sides', function(){
      let width = 10;
      let height = 20;
      let answer = areaCalculator(width, height);
      assert.equal(answer, 200)

      width = 0;
      height = 20;
      answer = areaCalculator(width, height);
      assert.equal(answer, null)


      width = 20;
      height = 20;
      answer = areaCalculator(width, height);
      assert.equal(answer, 400)

      width = 10;
      height = 10;
      answer = areaCalculator(width, height);
      assert.equal(answer, 100)

      width = 20;
      height = 0;
      answer = areaCalculator(width, height);
      assert.equal(answer, null)
    })
  })
})
