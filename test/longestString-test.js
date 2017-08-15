const assert = require('chai').assert
const longestString = require('../longestString')

describe('.longestString', function() {
  it('returns the longest string in an array', function() {
    let strings = ['horses', 'cats', 'pineapples'];
    assert.equal(longestString(strings), 'pineapples')
  });

  it('returns null for an empty array', function() {
    assert.equal(longestString([]), null)
  })
})
