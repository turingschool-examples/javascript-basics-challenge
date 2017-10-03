const assert = require('chai').assert
const longestString = require('./longestString')

describe('longestString returns the longest string in an array', function() {
  context('when provided with an array of strings', function() {
    it('returns the longes string', function() {
      var animals = ['dog', 'pig', 'horse', 'salamander']
      assert.equal(longestString(animals), 'salamander');
    })
  })

  context('when provided with an empty array', function() {
    it('returns null', function() {
      assert.isNull(longestString([]));
    })
  })
})
