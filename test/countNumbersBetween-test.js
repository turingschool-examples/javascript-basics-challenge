const assert = require('chai').assert;
require('../countNumbersBetween');

describe('averages functions', function() {

  it('returns the number of integers in the Array that are between the two bounds (including the bounds)', function() {
    var arr = ([3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29], 25, 100);
    assert.equal(arr.countNumbersBetween(), 8);
  });

});
