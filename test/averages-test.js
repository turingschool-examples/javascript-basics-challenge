const assert = require('chai').assert;
const averages = require('../averages');
// const mean = require('../averages');

describe('average functions', function(){
  context('take an array and return the average', function(){
    it('can determine the total from an array', function(){
      assert.equal(averages.total([1,2,3,4,]), 10);
    });
    it('can determine the mean from an array', function(){
      assert.equal(averages.mean([1,2,3,4]), 2.5);
    });
    it('can determine the median from an array', function(){
      assert.equal(averages.median([5,4,3,2,1]), 3);
      assert.equal(averages.median([6,5,4,3,2,1]), 3.5)
    });
    it('can determine the mode from an array', function(){
      modeObject = averages.mode([1,2,2,3,3,4]);
      assert.deepEqual(modeObject['2'], 2);
      assert.deepEqual(modeObject['3'], 2);
    })
  });
});
