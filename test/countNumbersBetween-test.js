/*jshint esversion: 6 */

const assert = require('chai').assert;
const countNumbersBetween = require('../countNumbersBetween');

describe('Count numbers between bounds', function() {
  it('will return 0 if the array is empty', function() {
    assert.equal(countNumbersBetween([], 0, 10), 0);
  });

  it('will return the number of integers between two bounds', function() {
    assert.equal(countNumbersBetween([25, 2, 8], 0, 100), 3);
    assert.equal(countNumbersBetween([-19, 1, 22], 0, 100), 2);
    assert.equal(countNumbersBetween([100, 200, 300], 100, 300), 3);
    assert.equal(countNumbersBetween([], -10, 10), 0);
    assert.equal(countNumbersBetween([5], 5, 5), 1);
  });
});
