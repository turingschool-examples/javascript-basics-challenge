const expect = require('chai').expect
const longestString = require('../longestString')

describe("longestString", function() {
  context("given an array of strings", function() {
    it("returns the string of the longest length", function() {
      var array = ["medium", "some long string", "s"]

      expect(longestString(array)).to.equal("some long string")
    })
  })

  context("given an empty array", function() {
    it("returns null", function() {
      expect(longestString([])).to.equal(null)
    })
  })
})
