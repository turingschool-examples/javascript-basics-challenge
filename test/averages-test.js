const assert = require('chai').assert;
const total = require('../lib/averages');

describe('determine total', function() {
  it('determines sum of all elements in an array', function() {
    var numbers = [1, 2, 3, 4, 5];
    assert.equal(total(numbers), 15);
  });
});
