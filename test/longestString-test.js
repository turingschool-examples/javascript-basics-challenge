const assert = require('chai').assert
const longestString = require('../scripts/longestString')
const array = ['horses', 'cats', 'pineapples']

describe('longestString', () => {
  it('returns longest string in array', () => {
    assert.deepEqual(longestString(array), 'pineapples')
  })
})
