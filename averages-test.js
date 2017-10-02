const assert = require('chai').assert
const Average = require('./averages')

describe('calculations involving averages can be made', function() {
  context('when calling total', function() {
    it('returns the total of all the values in the array', function() {
      assert.equal(Average.total([1,5,12,8,4]), 30);
    })
  })

  context('when calling mean', function() {
    it('returns the average of the array', function() {
      assert.equal(Average.mean([1,3,5,7,9], 5));
    })
  })

  context('when calling median on a sorted array', function() {
    it('returns the median of the array', function() {
      assert.equal(Average.median([1,3,5,7,9], 5));
    })
  })

  // context('when calling median on an unsorted array', function() {
    // it('returns the median of the array', function() {
      // assert.equal(Average.median([1,9,3,7,5], 5))
  //   })
  // })

  context('when calling mode on a valid sorted array', function() {
    it('returns an object containing the mode', function() {
      assert.equal(Average.mode([1,2,2,3,4,5,6,7,8,9]), 2);
    })
  })

  // context('when calling mode on a valid unsorted array', function() {
  //   it('returns an object containing the mode', function() {
  //     assert.equal(Average.mode([1,2,7,4,6,5,8,3,9,2]), 2)
  //   })
  // })

  context('when calling mode on an invalid array', function() {
    it('returns a message', function() {
      assert.equal(Average.mode([1,2,3,4,5,6,7,8,9], "No mode found. No recurring numbers."));
    })
  })
})
