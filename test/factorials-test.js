const assert = require('chai').assert
const factorials = require('../lib/factorials')

describe("Factorial", function() {
  it("returns the factorial", function() {
    let number = 4
    let result = factorials.factorial(number)
    assert.equal(result, 24)
  });
});
