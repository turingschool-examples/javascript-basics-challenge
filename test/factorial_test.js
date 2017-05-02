const expect = require('expect');
const factorial = require('../lib/factorial');

describe('factorial', function() {
  it('returns the factorial', function() {
    expect(factorial(4)).toEqual(24);
  })
})
