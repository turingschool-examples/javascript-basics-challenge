expect = require('chai').expect
assert = require('chai').assert
longest_string = require('../scripts/longest.js')

describe('Longest string function', function() {
  it('will return the longest string', function() {
    assert.deepEqual(longest_string.longest(['hi', 'what', 'erika']), 'erika')
  })
})