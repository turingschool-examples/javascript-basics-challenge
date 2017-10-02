const assert = require('chai').assert
const mean = require('../../lib/averages/mean.js')

describe('isRightTriangle functionality', function() {
  context('isRightTriangle function', function(){
    it('it can determine if 3 sides could exist in a right triangle', function(){
      let toBeAveraged = [2,3,4,1,3,5];
      let answer = mean(toBeAveraged);

      assert.equal(answer, 3)

      toBeAveraged = [];
      answer = mean(toBeAveraged);

      assert.equal(answer, null)

      toBeAveraged = [2,6];
      answer = mean(toBeAveraged);

      assert.equal(answer, 4)

      toBeAveraged = [1,2,3,4,5,6,7,8,9,10,11];
      answer = mean(toBeAveraged);

      assert.equal(answer, 6)

      toBeAveraged = [100,200];
      answer = mean(toBeAveraged);

      assert.equal(answer, 150)
    })
  })
})
