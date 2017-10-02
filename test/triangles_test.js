const assert = require("chai").assert;
const isTriangle = require("../triangles/isTriangle");


describe("is object a triangle test", function(){
  it("returns false if any of the sides are zero", function(){
    assert.isFalse(isTriangle(0,0,0));
    assert.isFalse(isTriangle(1,4,0));
  })
  it("returns false if any of the sides are negative", function(){

  })
});
