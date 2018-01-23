const assert =  require("chai").assert;
const geometry =  require("../lib/triangles")

describe("When passed three lengths", function(){
  it("can determine if they constitute a triange", function(){
    assert(geometry.isTriangle(3,4,5))
    assert(!geometry.isTriangle(3,7,5))
  });
});