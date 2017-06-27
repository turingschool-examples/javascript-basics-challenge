const assert  = require('chai').assert
const longestString = require('../lib/longestString')

describe('longestString', () => {
  it('returns longest string in the array', () => {
    arr = ['horses', 'cats', 'pineapples']
    assert.equal(longestString(arr), 'pineapples')
  })
})
