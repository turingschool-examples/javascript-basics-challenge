var expect    = require("chai").expect;
var factorials = require("../app/factorials");

describe("Average function thing", function() {
  it("performs average functions on an array", function() {

    var num = 7;

    var factThing = factorials.factorial(num);

    expect(factThing).to.deep.equal(5040);

    });
  });
