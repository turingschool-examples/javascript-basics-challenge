var expect    = require("chai").expect;
var rectangles = require("../app/rectangles");

describe("Rectangle find thing", function() {
  it("finds various values of a rectangle", function() {

    var rectangle = {width: 10, height: 20}
    var recArea = rectangles.area(rectangle);
    var recPerimeter = rectangles.perimeter(rectangle);
    var recDiagonal = rectangles.diagonal(rectangle);
    var recIsSquare = rectangles.isSquare(rectangle);

    expect(recArea).to.deep.equal(200);
    expect(recPerimeter).to.deep.equal(60);
    expect(recDiagonal).to.deep.equal(22.360679774997898);
    expect(recIsSquare).to.deep.equal(false);

    });
  });
