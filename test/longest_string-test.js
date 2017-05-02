const longestString = require('../lib/longest_string')
const expect = require('chai').expect

describe('longestString function', function(){
  it('returns the longest word from an array', function(){
    test = ['apple', 'banana', 'pineapple']
    expect(longestString(test)).to.eq('pineapple')
  })
  it('returns null for an empty array', function(){
    test = []
    expect(longestString(test)).to.eq(null)
  })
})
