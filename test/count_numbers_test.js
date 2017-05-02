const expect = require('expect');
const countNumbersBetween = require('../lib/count_numbers');

describe('countNumbersBetween', function() {
  it('returns the number of elements in range', function() {
    expect(countNumbersBetween([4, 5, 6], 0, 100)).toEqual(3);
    expect(countNumbersBetween([-19, 1, 22], 0, 100)).toEqual(2);
    expect(countNumbersBetween([], -10, 10)).toEqual(0);
  })
})
