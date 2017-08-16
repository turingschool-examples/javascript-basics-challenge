var assert = require('chai').assert;
var isTriangle = require('../triangle')

describe("it knows if it is a real triangle", function() {
  it("returns true when sides make a rational triangle", function(){
    var makeTriangle = new isTriangle;
    assert.equal(makeTriangle.theTriangle(3,3,3), "This is an equilateral triangle");
  })

  it("can test different variation of sides to ensure it is a right triangle", function (){
    var makeTriangle = new isTriangle;
    assert.equal(makeTriangle.theTriangle(6,8,10), "This is a proper right triangle!")
    assert.equal(makeTriangle.theTriangle(6,10,8), "This is a proper right triangle!")
    assert.equal(makeTriangle.theTriangle(10,8,6), "This is a proper right triangle!")
  })

  it("ensures a triangle cannot have negative sides", function(){
    var makeTriangle = new isTriangle;
    assert.equal(makeTriangle.theTriangle(-1,1,1), "A triangle cannot have negative side!")
    assert.equal(makeTriangle.theTriangle(1,-1,1), "A triangle cannot have negative side!")
    assert.equal(makeTriangle.theTriangle(1,1,-1), "A triangle cannot have negative side!")
  })

  it("ensures a triangle cannot have zero for a side", function(){
    var makeTriangle = new isTriangle;
    assert.equal(makeTriangle.theTriangle(0,1,1), "A triangle cannot have a missing side!")
    assert.equal(makeTriangle.theTriangle(1,0,1), "A triangle cannot have a missing side!")
    assert.equal(makeTriangle.theTriangle(1,1,0), "A triangle cannot have a missing side!")
  })
})
