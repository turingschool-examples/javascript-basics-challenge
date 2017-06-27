const assert = require('chai').assert
const countNumbersBetween = require('./count_numbers_between')

describe('countNumbersBetween functionality', function(){
 it('return the number of integers in the Array', function(){
  assert.deepEqual(countNumbersBetween([25, 2, 8], 0, 100), 3)
  assert.deepEqual(countNumbersBetween([100, 200, 300], 100, 300), 3)
  assert.deepEqual(countNumbersBetween([], -10, 10), 0)
  assert.deepEqual(countNumbersBetween([5], 5, 5), 1)
 })
})


