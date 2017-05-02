const factorial = require('../lib/factorial');
const assert = require('chai').assert;

describe("factorial function", function() {
  it("does a factorial", function() {
    assert.equal(factorial(4), 24);
  });
});
