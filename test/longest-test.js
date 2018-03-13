const assert = require('chai').assert
const longestString = require('../longest').longestString


describe('longestString', function () {
  context('longestString function', function () {
    it('returns the longest string in an Array', function () {
      assert.equal(longestString(['horses', 'cats', 'pineapples']), "pineapples")
      assert.equal(longestString(["Mary", "had", "a", "little", "lamb"]), "little")
    })
  })

})
