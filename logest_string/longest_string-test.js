const assert = require('chai').assert
const longestString = require('./longest_string')

describe('longestString functionality', function(){
  it('returns the longest String', function(){
    assert.equal(longestString(['horses', 'cats', 'pineapples']), 'pineapples')
  })
})