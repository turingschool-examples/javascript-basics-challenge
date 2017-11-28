assert = require('chai').assert;
const longestString = require('../lib/longest-string')

describe('chai tests longest string in array', function() {
  it('can return the longest string', function() {
    stringArray = ["things", "stuff", "this", "partypantsawesometime"]
    assert.deepEqual(longestString(stringArray), "partypantsawesometime")
  })
  it('returns null with an empty array', function() {
    assert.deepEqual(longestString([]), null)
  })
})
