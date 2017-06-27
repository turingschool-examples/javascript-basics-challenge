const assert = require("chai").assert
const countNumbersBetween = require("../count-numbers-between")

describe("countNumbersBetween", function() {
  context("with bounds", function() {
    it("can count the numbers between", function() {
      assert.equal(countNumbersBetween([], 0, 100), 0)
      assert.equal(countNumbersBetween([1, 2, 3], 0, 10), 3)
      assert.equal(countNumbersBetween([1, 2, 3], 1, 3), 3)
      assert.equal(countNumbersBetween([1, 2, 3], 1, 1), 1)
    })
  })
})
