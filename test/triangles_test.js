const assert = require("chai").assert;
const isTriangle = require("../triangles/isTriangle");
const pry = require('pryjs');


describe("is object a triangle test", function(){
  it("returns false if any of the sides are zero", function(){
    assert.equal("false, because a triangle can't have 0 length", isTriangle(1,4,0));
    assert.equal("false, because a triangle can't have 0 length", isTriangle(0,0,0));
  })
  it("returns false if any of the sides are negative", function(){
    assert.equal("false, because a triangle can't have a negative dimension", isTriangle(1,3,-2));

  })
  it("knows an equilateral triangle when it sees one", function(){
    assert.equal("true, this is an equilateral triangle", isTriangle(4,4,4))
  })
  it("knows a right-angle triangle when it sees one", function(){
    assert.equal("true, a right triangle!", isTriangle(3,4,5));
  })
});
