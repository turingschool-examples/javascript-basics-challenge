const assert = require('chai').assert;
const factorial   = require('../factorial').factorial

describe("factorial function", function(){
  it("returns the factorial for a number", function(){
    assert.equal(factorial(4), 24)
  });
});
