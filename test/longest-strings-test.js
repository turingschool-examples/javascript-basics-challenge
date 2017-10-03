const assert = require('chai').assert
const longestString= require('../lib/longestString')

describe('Longest Strings Methods', function() {
  it('should return the correct longestString', function() {
    var strings = ['horses', 'cats', 'pineapples']
    assert.equal('pineapples', longestString(strings))
  })

  it('should return the correct longestString', function() {
    var strings = ['horses', 'cats', 'pineapples', 'hardyharhar']
    assert.equal('hardyharhar', longestString(strings))
  })

  it('should return the correct longestString', function() {
    var strings = ['horses', 'cats', 'pineapples', 'hardyharhar', 'mars', 'hardy']
    assert.equal('hardyharhar', longestString(strings))
  })
})
