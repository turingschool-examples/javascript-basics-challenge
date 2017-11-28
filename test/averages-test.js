const assert = require('chai').assert;
const pry = require('pryjs')
const average = require('../lib/averages')

describe('Averages', function(){

  it('can find total of an array', function() {
    assert.equal(average.total([1,2,3,4]), 10)
  });

  it('can find mean of array', function() {
    assert.equal(average.mean([1,2,3,4]),2.5)
  });

  it('can find median', function() {
    assert.equal(average.median([1,2,3,4]),2.5)
  });

  it('can find the mode', function() {
    assert.deepEqual(average.mode([1,2,2,3]), { '1': 1, '2': 2, '3': 1})
  });
})
