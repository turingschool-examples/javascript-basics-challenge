const assert = require('chai').assert;
const isTriangle = require("../lib/triangles");

describe("triangles", function(){
  it("can determine if it is a triangle", function(){
    var result = isTriangle(10, 8, 6)

    assert.deepEqual(result, true);
  });

  it("can reject negative numbers", function(){
    var result = isTriangle(-1, 1, 1)

    assert.deepEqual(result, false);
  });

});
