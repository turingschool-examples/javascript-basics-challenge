const expect = require('chai').expect;
const assert = require('chai').assert;
const times = require('../scripts/times.js');

describe('Times table functions', function() {
  it('returns the times tables for a given integer', function() {
    assert.deepEqual(times.times(5), [1,  2,  3,  4,  5]
                                     [2,  4,  6,  8,  10]
                                     [3,  6,  9,  12, 15]
                                     [4,  8,  12, 16, 20]
                                     [5,  10, 15, 20, 25])
  })
})