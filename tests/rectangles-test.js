const assert = require('chai').assert
const rectangleFunctions = require('../rectangles')

describe("Rectangle functions", function () {
  it("can calculate area", function () {
    let rectangle1 = new rectangleFunctions.Rectangle(10, 20)
    assert.equal(rectangleFunctions.area(rectangle1), 200)

    let rectangle2 = new rectangleFunctions.Rectangle(3, 4)
    assert.equal(rectangleFunctions.area(rectangle2), 12)
  });

  it("can calculate perimeter", function () {
    let rectangle1 = new rectangleFunctions.Rectangle(10, 20)
    assert.equal(rectangleFunctions.perimeter(rectangle1), 60)

    let rectangle2 = new rectangleFunctions.Rectangle(3, 4)
    assert.equal(rectangleFunctions.perimeter(rectangle2), 14)
  });

  it("can calculate diagonal", function () {
    let rectangle1 = new rectangleFunctions.Rectangle(10, 20)
    assert.equal(rectangleFunctions.diagonal(rectangle1), 22)

    let rectangle2 = new rectangleFunctions.Rectangle(3, 4)
    assert.equal(rectangleFunctions.diagonal(rectangle2), 5)
  });

  it("can calculate if it is a square", function () {
    let rectangle1 = new rectangleFunctions.Rectangle(10, 20)
    assert.equal(rectangleFunctions.isSquare(rectangle1), false)

    let rectangle2 = new rectangleFunctions.Rectangle(3, 3)
    assert.equal(rectangleFunctions.isSquare(rectangle2), true)
  });

});