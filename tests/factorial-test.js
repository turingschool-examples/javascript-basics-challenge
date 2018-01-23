const assert = require('chai').assert
const factorialFunction = require('../factorial')

describe("Factorial function", function () {
  it("can calculate the factorial of an integer", function () {
    assert.equal(factorialFunction.factorial(4), 24);
  });
  it("will not calculate a negative", function(){
    assert.equal(factorialFunction.factorial(-4), "Cannot Compute");
  });
  it("will not calculate a non-number", function () {
    assert.equal(factorialFunction.factorial("a"), "Cannot Compute");
    assert.equal(factorialFunction.factorial(null), "Cannot Compute");
  })
})