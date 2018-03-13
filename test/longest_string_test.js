const assert = require('chai').assert
var longestString = require('../lib/longest_string.js')

describe('longestString', function() {
  context('longestString function', function() {
    it('it can find the longest string in array', function() {
      array = ['horses', 'cats', 'pineapples'];
      assert.equal(longestString(array), 'pineapples')
    })
  })
});
