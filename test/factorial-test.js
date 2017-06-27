const assert = require("chai").assert
const factorial = require("../factorial")


describe("factorial", function() {
  it("returns the factorial", function() {
    assert.equal(factorial(0), 1)
    assert.equal(factorial(4), 24)
    assert.equal(factorial(10), 3628800)
    // assert.isTrue(theReviewerOfThisCode.isAwesome)
  })
})
