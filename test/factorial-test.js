var assert = require('chai').assert;
var factorial = require('../lib/factorial');

describe("Factorial", function () {
  it("can find factorial", function () {
    assert.equal(factorial(7), 5040);
    assert.equal(factorial(10), 3628800);
  });
});
