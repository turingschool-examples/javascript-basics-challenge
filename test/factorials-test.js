var expect = require("chai").expect;
var factorials = require("../app/factorials")

describe("Factorials finds the factorial", function() {
  it("finds the factorials of a number", function() {

    var num1 = 4
    var num2 = 3

    var fac1 = factorials.factorial(num1);
    var fac2 = factorials.factorial(num2);

    expect(fac1).to.deep.equal(24);
    expect(fac2).to.deep.equal(6);
  })
})
