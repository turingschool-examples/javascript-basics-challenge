const assert = require('chai').assert;
const {total, median, mean, mode} = require('../lib/averages');

describe('determine total', function() {
  it('determines sum of all elements in an array', function() {
    var numbers = [1, 2, 3, 4, 5];
    assert.equal(total(numbers), 15);
  });
});

describe('determine median', function() {
  it('determines the median value for elements in an array', function() {
    var numbers = [1, 2, 3, 4, 5];
    var numbersEven = [1, 2, 3, 4, 5, 6];
    assert.equal(median(numbers), 3);
    assert.equal(median(numbersEven), 3.5);
  });
});

describe('determine mean', function() {
  it('determines the mean value for elements in an array', function() {
    var numbers = [1, 2, 3];
    assert.equal(mean(numbers), 3);
  });
});

describe('determine mode', function() {
  it('determines the mode value for elements in an array', function() {
    var numbers = [1, 2, 3, 3, 3, 4, 4, 5, 5, 6];
    assert.equal(mode(numbers), {mode: 3});
  });
});
