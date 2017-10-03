const assert = require('chai').assert
const fact = require('../factorial')


describe("it tests triangle", function() {
  it("returns the thing", function() {
    assert.deepEqual(fact.factorial(4), 24);
  });
});
