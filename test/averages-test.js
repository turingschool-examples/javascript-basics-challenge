const assert = require('chai').assert;
const {total, mean, median, mode} = require('../averages.js');

describe('total functionality', function () {
  it('is a function', function() {
    assert.isFunction(total, 'this is a function');
  });

  it('can find the total of every element in an array', function () {
    assert.deepEqual(total([1, 2, 3]), 6);
  });
});

describe('average/mean functionality', function () {
  it('is a function', function() {
    assert.isFunction(mean, 'this is a function');
  });

  it('can find the mean of the array', function () {
    assert.deepEqual(mean([1, 2, 2, 3]), 2);
  });
});

describe('median functionality', function () {
  it('is a function', function() {
    assert.isFunction(median, 'this is a function');
  });

  it('can find the median of the array', function () {
    assert.deepEqual(median([1, 2, 4, 2, 3]), 2);
  });
});

describe('mode functionality', function () {
  it('is a function', function() {
    assert.isFunction(mode, 'this is a function');
  });

  it('can return an object', function () {
    assert.instanceOf(mode([1, 2, 4, 2, 3]), Object);
  });

});
