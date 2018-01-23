var expect = require("chai").expect;
var triangle = require("../app/triangle")

describe("check if it is a triangle", function(){
  it("checks for different kind of inputs", function(){
    var noZero = triangle.isTriangle(0,0,0);
    var noNegative = triangle.isTriangle(-2,1,5);
    var equilateral = triangle.isTriangle(4,4,4);
    var validTriangle = triangle.isTriangle(6,8,10);
    var invalidTriangle = triangle.isTriangle(4, 8, 50);

    expect(noZero).to.deep.equal(false);
    expect(noNegative).to.deep.equal(false);
    expect(equilateral).to.deep.equal(true);
    expect(validTriangle).to.deep.equal(true);
    expect(invalidTriangle).to.deep.equal(false);
  });
});
