const assert = require('chai').assert;
const countNumbersBetween = require('../countNumbersBetween');

describe('counts numbers between', function() {

  it('returns the number of integers in the Array that are between the two bounds (including the bounds)', function() {
    assert.equal(countNumbersBetween([25, 2, 8], 0, 100), 3);
    assert.equal(countNumbersBetween([-19, 1, 22], 0, 100), 2);
    assert.equal(countNumbersBetween([100, 200, 300], 100, 300), 3);
    assert.equal(countNumbersBetween([], -10, 10), 0);
    assert.equal(countNumbersBetween([5], 5, 5), 1);
  });

});
