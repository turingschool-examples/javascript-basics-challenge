var assert = require('chai').assert
var longestString = require('../lib/longest-string')

describe('LongestString', function() {
  it('can identify the longest string element from a collection', function() {
    assert.equal(longestString.longestString(['macarons', 'cats', 'lemon pie']), 'lemon pie')
  })

  it('returns undefined for an empty collection', function() {
    assert.isUndefined(longestString.longestString([]))
  })
})