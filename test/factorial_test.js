const assert = require('chai').assert;
const factorial = require('../factorial');


describe("It can do a factorial", function(){
  it(' and the answer is correct', function(){
    assert.equal(factorial(4), 24);
    assert.equal(factorial(5), 120);
  });
});
