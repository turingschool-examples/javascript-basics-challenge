assert = require('chai').assert;
pry = require('pryjs');

let math = require('../lib/math')

describe('Averages', function(){
  it('Can calc total', function(){
    let nums = [1, 2, 3, 4, 5];

    assert.equal(math.total(nums), 15);
  });

  it('Can calc mean', function(){
    let nums = [1, 2, 3, 4, 10];

    assert.equal(math.mean(nums), 4);
  });

  it('Can calc median', function(){
    let nums1 = [1, 2, 3, 4, 5];
    let nums2 = [1, 2, 3, 5, 6, 7];

    assert.equal(math.median(nums1), 3);
    assert.equal(math.median(nums2), 4);
  });

  it('Can calc mode', function(){
    let nums = [2, 1, 3, 1, 4, 5];

    assert.equal(math.mode(nums), 1);
  });

  it('Can calc factorial', function(){
    assert.equal(math.factorial(4), 24);
  });
});