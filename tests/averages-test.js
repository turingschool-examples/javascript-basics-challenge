const assert = require('chai').assert
const averages = require('../lib/averages')

describe('Averages', function() {
  it('can evaluate the total of a collection', function() {
    assert.equal(averages.total([4, 8, 15, 16, 23, 42]), 108)
  })

  it('can evaluate the mean of a collection', function() {
    assert.equal(averages.mean([4, 8, 15, 16, 23, 42]), 18);
  })

  it('can evaluate the median of a collection', function() {
    assert.equal(averages.median([4, 8, 15, 16, 23, 42]), 15.5);
    assert.equal(averages.median([4, 8, 15, 4, 16, 23, 42]), 4)
  })

  it('can evaluate the mode of a collection', function() {
    assert.equal(averages.mode([4, 8, 15, 16, 4, 23, 42]), 4)
  })
})