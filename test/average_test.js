const expect = require('expect');
require('../lib/average');

describe('total', function() {
  it('returns the total', function() {
    expect([1, 2, 3].total()).toEqual(6);
  })
})

describe('mean', function() {
  it('returns the average', function() {
    expect([1, 2, 3].mean()).toEqual(2);
  })
})

describe('median', function() {
  it('returns the median', function() {
    expect([3, 1, 2].median()).toEqual(2);
  })
})

describe('mode', function() {
  it('returns the most common element', function() {
    expect([4, 7, 5, 4].mode()).toEqual({4: 2});
  })
})

describe('pad', function() {
  it('pads the array the specified amount', function() {
    expect([1, 2, 3].pad(4)).toEqual([1, 2, 3, null]);
  })
  it('returns the origin array if the pad matches length', function() {
    expect([1, 2, 3].pad(3)).toEqual([1, 2, 3]);
    expect([1, 2, 3].pad(0)).toEqual([1, 2, 3]);
  })
})
