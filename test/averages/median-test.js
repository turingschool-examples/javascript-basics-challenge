const assert = require('chai').assert
const median = require('../../lib/averages/median.js')

describe('median functionality', function() {
  context('median function', function(){
    it('it can determine the median of an array of numbers', function(){
      let toBeMediated = [1,2,3,4,5,6,7,8,9,10,11];
      let answer = median(toBeMediated);

      assert.equal(answer, 6)

      toBeMediated = [2,6,9,4,1,3,7,8,5,11,10];
      answer = median(toBeMediated);

      assert.equal(answer, 6)

      toBeMediated = [];
      answer = median(toBeMediated);

      assert.equal(answer, null)

      toBeMediated = [2,4];
      answer = median(toBeMediated);

      assert.equal(answer, 3)

      toBeMediated = [2,3,4,1,5];
      answer = median(toBeMediated);

      assert.equal(answer, 3)

      toBeMediated = [2,3,4,1,5,6];
      answer = median(toBeMediated);

      assert.equal(answer, 3.5)

      toBeMediated = [6,8,10,12];
      answer = median(toBeMediated);

      assert.equal(answer, 9)
    })
  })
})
