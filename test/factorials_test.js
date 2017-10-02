const assert = require('chai').assert;
const expect = require('chai').expect;
const factorial = require('../factorials/factorial');

describe("factorials tests", function(){
  it("will return an error if given a negative or non-numeric value", function(){
    expect(factorial("A")).to.be.undefined;
    expect(factorial(-2)).to.be.undefined;
  })
  it("calculates factorial correctly for positive integers", function(){
    expect(factorial(4)).to.equal(24);
  })
});
