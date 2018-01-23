const assert = require('chai').assert
const myFunctions = require('../lib/longest-string')

describe('longest string', function() {
  it('finds the longest string in the array', function()  {
    array = ['horses', 'cats', 'pineapples']
    assert.strictEqual(myFunctions.longestString(array), "pineapples")
  })

  it('empty array returns null', function() {
    array = []
    assert.strictEqual(myFunctions.longestString(array), null)
  })
})
