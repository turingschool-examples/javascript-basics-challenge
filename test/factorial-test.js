const assert = require('chai').assert;
const factorial = require('../factorial');


describe("factorial function", function() {
  it("returns the facorial of a number greater than zeros", function() {
    var expected = 24;
    var actual = factorial(4);
    assert.equal(expected, actual);
  });

  it("returns the facorial of zero", function() {
    var expected = 1;
    var actual = factorial(0);
    assert.equal(expected, actual);
  });
})