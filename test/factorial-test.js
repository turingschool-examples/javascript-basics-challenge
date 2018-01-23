const assert =  require("chai").assert;
const factorials = require("../lib/factorial")

it("finds factorial of a number", function(){
  assert.equal(24, factorials.findFactorial(4));
});