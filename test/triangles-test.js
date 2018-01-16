var expect    = require("chai").expect;
var triangles = require("../app/triangles");

describe("Triangles find thing", function() {
  it("finds various values of a triangle", function() {

    expect(triangles.isTriangle(0,0,0)).to.deep.equal(false);
    expect(triangles.isTriangle(-2,1,5)).to.deep.equal(false);
    expect(triangles.isTriangle(4,4,4)).to.deep.equal(true);
    expect(triangles.isTriangle(10,8,6)).to.deep.equal(true);
    expect(triangles.isTriangle(4,8,50)).to.deep.equal(false);
  });
});
