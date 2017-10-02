const assert = require('chai').assert;
const factorial = require('../factorial')

describe("factorial calculation", function() {
  it("returns factorial of number", function() {
    assert.deepEqual(factorial.factorial(4), 24);
  });
});
