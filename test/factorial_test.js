const assert = require('chai').assert
const factorial = require('../factorial').factorial;

describe("factorial", function() {
  it("takes 3 and returns six", function() {
    var result = factorial(4);
    var expected = 24;
    assert.equal(expected, result);
  });
});
