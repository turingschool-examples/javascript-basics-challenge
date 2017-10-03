const assert = require('chai').assert;
const longestString = require('../lib/longest_string');

describe('Longest String', function() {
  it('returns the longest string in array', function() {
    var array = ['horses', 'cats', 'pineapples'];

    assert.equal(longestString(array), 'pineapples');
  });

  it('returns null for empty array', function() {
    assert.isNull(longestString([]));
  });
});
