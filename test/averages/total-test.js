const assert = require('chai').assert
const total = require('../../lib/averages/total.js')

describe('total functionality', function() {
  context('total function', function(){
    it('it can determine the total of an array of numbers', function(){
      let toBeTotaled = [2,3,4,1,3,5];
      let answer = total(toBeTotaled);

      assert.equal(answer, 18)

      toBeTotaled = [];
      answer = total(toBeTotaled);

      assert.equal(answer, null)

      toBeTotaled = [2,6];
      answer = total(toBeTotaled);

      assert.equal(answer, 8)

      toBeTotaled = [1,2,3,4,5,6,7,8,9,10,11];
      answer = total(toBeTotaled);

      assert.equal(answer, 66)

      toBeTotaled = [100,200];
      answer = total(toBeTotaled);

      assert.equal(answer, 300)
    })
  })
})
