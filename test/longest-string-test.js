var assert = require('chai').assert;
var longestString = require('../longest-string').longestString
var pry = require('pryjs')


describe('Longest string function', function() {
  it('can return the longest string from array', function() {
    assert.equal(longestString([]), null)
    // eval(pry.it)
    assert.equal(longestString(['dog', 'bear', 'platypus']), 'platypus')
  })
})
