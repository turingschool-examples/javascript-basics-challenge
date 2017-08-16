var assert = require('chai').assert;
var isTriangle = require('../triangle')

describe("it knows if it is a real triangle", function() {
  it("returns true when sides make a rational triangle", function(){
    var makeTriangle = new isTriangle;
    assert.equal(makeTriangle.theTriangle(3,3,3), true);
  })
})
