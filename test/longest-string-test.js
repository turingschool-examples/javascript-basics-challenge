const assert = require("chai").assert
const longestString = require("../longest-string")


describe("longestString", function() {
  context("with an array with strings", function() {
    it("it returns the longest string", function() {
      assert.equal(longestString(['how', 'is', 'the current state of the world economy']), 'the current state of the world economy')
      assert.equal(longestString(['it', 'is', 'under some stress, but extreme poverty is declining']), 'under some stress, but extreme poverty is declining')
    })
    it("it returns null if array is empty", function() {
      assert.equal(longestString([]), null)
    })
  })
})
