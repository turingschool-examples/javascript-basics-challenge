
const assert = require('chai').assert;
const expect = require('chai').expect;
const longestString = require('../lib/longest_string')

describe('longest string', function() {
  context('longest string', function() {
    it("can return the longest strin in an array", function() {
      let list = ["elephant", "dog", "horse"]

      assert.deepEqual(longestString(list), "elephant" )
    })
  })
})
