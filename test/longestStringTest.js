const assert = require('chai').assert
const longestString = require('../longestString')

describe('longestString', function() {
  context('longestString test', function() {
    it('returns the longest string from an array', function() {
      array = new Array('l', 'le', 'sugar')
      assert.equal(longestString(array), 'sugar')
    })
  })
})
