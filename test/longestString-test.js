const assert = require('chai').assert
const longestString = require('../lib/longestString')

describe('longestString(array) functionality', function() {
  context('with an array of strings as an argument', function() {
    it('returns the string with the most characters', function () {
      array = ['hi', 'b', 'beep']
      assert.equal(longestString.longestString(array), 'beep')
      array2 = ['burnley', 'socccceeerrrrr', 'manchester']
      assert.equal(longestString.longestString(array2), 'socccceeerrrrr')
    })
  })

  context('with an empty array', function() {
    it('returns null', function() {
      assert.equal(longestString.longestString([]), null)
    })
  })
})
