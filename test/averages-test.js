const assert = require('chai').assert;
const averages = require('../averages');

it('returns total of all items in array', function () {
  assert.equal([1,2,3].total(), 6);
})

it('returns average of items in array', function () {
  assert.equal([1,2,3,4,5].mean(), 3);
})

it('returns median of items in array', function() {
  assert.equal([5,2,4,1].median(), 3);
  assert.equal([4,5,6,6,7].median(), 6);
})

it('returns mode of items in array', function() {
  assert.deepEqual([1,1,1,1,2].mode(), {1: 4, 2: 1})
})
