const assert = require('chai').assert
const averages = require('../averages')

describe('average tests', function() {
  context('math trig', function(){
    it('can compute the total of an array', function(){
      var array1 = [1,2]
      var array2 = [1,2,4,1]
      assert.equal(array1.total(), 3)
      assert.equal(array2.total(), 8)
    });

    it('can compute the mean of an array', function(){
      var array1 = [1,3]
      var array2 = [1,2,4,1]
      assert.equal(array1.mean(), 2)
      assert.equal(array2.mean(), 2)
    });

    it('can compute the median of an array', function(){
      var array1 = [4,3,1]
      var array2 = [1,2,3,4]

      assert.equal(array1.median(), 3)
      assert.equal(array2.median(), 2.5)
    });

    it('can compute the module of an array', function(){
      var array1 = [1,3,3,4,4,5,5,5]
      var array2 = [1,2,1,2]

      assert.deepEqual(array1.mode(), {'5':3})
      assert.deepEqual(array2.mode(), {'1':2, '2': 2})
    });

  });
});
