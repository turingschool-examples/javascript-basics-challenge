const expect = require('expect');
const longestString = require('../lib/longest_string');

describe('longestString', function() {
  it('returns the longest string', function() {
    expect(longestString(['horses', 'cats', 'pineapples'])).toEqual('pineapples');
  })
})
