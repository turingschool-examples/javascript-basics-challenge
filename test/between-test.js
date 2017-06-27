const assert = require('chai').assert
const countNumbersBetween = require('../between')

it('counts numbers between', function() {
  assert.equal(countNumbersBetween([25, 2, 8], 0, 100), 3);          // => 3
  assert.equal(countNumbersBetween([-19, 1, 22], 0, 100), 2);        // => 2
  assert.equal(countNumbersBetween([100, 200, 300], 100, 300), 3);   // => 3
  assert.equal(countNumbersBetween([], -10, 10), 0);                 // => 0
  assert.equal(countNumbersBetween([5], 5, 5), 1);                   // => 1)
});
