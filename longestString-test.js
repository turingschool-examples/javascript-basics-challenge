const assert = require('chai').assert;
const longestString = require('./longestString');

describe('longestString', function() {
  context('longestString function', function() {
    it('it returns the longest string', function() {
      assert.equal(longestString(['horses', 'cats', 'pineapples']), 'pineapples')
    })
  })
})
