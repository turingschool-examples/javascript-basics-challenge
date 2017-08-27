const assert = require('chai').assert
const file = require('../lib/longest_string')

describe('Longest string finders', function() {
  var array = ['horses', 'cats', 'pineapples']

  it('can find longest string', function() {
    var acutal = file.longestString(array)
    var expected = 'pineapples'

    assert.equal(acutal, expected)
  })
})
