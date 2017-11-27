var expect    = require("chai").expect;
var triangles = require("../app/triangles");

describe("Triangle function thing", function() {
  it("checks for negative values for sides of a triangle", function() {

    var triangleCheckOne = triangles.isTriangle(-2,1,5);
    var triangleCheckTwo = triangles.isTriangle(0,0,0);
    var triangleCheckThree = triangles.isTriangle(4,4,4);


    expect(triangleCheckOne).to.deep.equal(false);
    expect(triangleCheckTwo).to.deep.equal(false);
    expect(triangleCheckThree).to.deep.equal(true);

    });
  });
