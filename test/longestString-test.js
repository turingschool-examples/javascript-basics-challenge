const assert = require('chai').assert
const utils  = require('../longestString')

describe('Longest String', () => {
  it('returns undefined if length of array is zero', () => {
    words = []
    let result = utils.longestString(words)
    assert.isUndefined(result)
  })

  it('returns longest string from array', () => {
    words = ['hello', 'world', 'taco', 'Tuesday']
    let result = utils.longestString(words)
    assert.equal(result, 'Tuesday')
  })
})