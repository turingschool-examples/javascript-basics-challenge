var expect = require("chai").expect;
var rectangle = require("../app/rectangles")


describe("Checks for the functions in the rectangle file", function() {
  it("find different mathematical problems for the equation", function() {
    var area = rectangle.area({width: 10, height: 20});
    var perimeter = rectangle.perimeter({width: 10, height: 20});
    var diagonal = rectangle.diagonal({width: 10, height: 20});
    var isSquare = rectangle.isSquare({width: 10, height: 20});

    expect(area).to.deep.equal(200);
    expect(perimeter).to.deep.equal(30);
    expect(diagonal).to.deep.equal(22.360679774997898);
    expect(isSquare).to.deep.equal(false);
  });
});
