const assert = require('chai').assert;
const average = require('../averages');

describe('average functions', function(){
  it('calculates the total of an array', function(){
    array = [2, 4, 6]
    assert.equal(average.total(array), 12)
  });

  it('calculates the mean of an array', function(){
    array = [2, 4, 6]
    assert.equal(average.mean(array), 4)
  });

  it('calculates the median of an array', function(){
    array = [0, 2, 4, 6, 8]
    assert.equal(average.median(array), 4)
    array = [1, 3, 4, 6, 7, 10]
    assert.equal(average.median(array), 5)
  });

  it('calculates the mode(s) of an array', function(){
    array = [0, 2, 4, 6, 2]
    assert.deepEqual(average.mode(array), [2])
    array = [1, 1, 1, 6, 7, 10, 10, 10]
    assert.deepEqual(average.mode(array), [1, 10])
  });
});
