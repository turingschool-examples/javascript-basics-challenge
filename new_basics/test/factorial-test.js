var expect = require('chai').expect;
var total = require('../app/factorial')

describe("find the factorial of any input", function(){
  it("finds the total of the factorial", function() {
    var number = total.factorial(0);
    var numberOne = total.factorial(4);

    expect(number).to.deep.equal(1);
    expect(numberOne).to.deep.equal(24);
  })
})
