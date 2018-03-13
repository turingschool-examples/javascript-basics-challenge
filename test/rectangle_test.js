const assert = require('chai').assert;
const [rectangleArea, rectanglePerimeter, rectangleDiagonal, isSquare] = require('../lib/rectangle');

describe("it calculates aspects about a rectangle", () => {
  it("calculates rectangle area", () => {
    let rectangle = {width: 10, height: 20}
    assert.equal(rectangleArea(rectangle), 200)
  })
  it("calculates rectangle perimeter", () => {
    let rectangle = {width: 10, height: 20}
    assert.equal(rectanglePerimeter(rectangle), 60)
  })
  it("calculates rectangle diagonal", () => {
    let rectangle = {width: 3, height: 4}
    assert.equal(rectangleDiagonal(rectangle), 5)
  })
  it("determine if rectangle is square", () => {
    let rectangle1 = {width: 10, height: 20}
    assert.equal(isSquare(rectangle1), false)
    let rectangle2 = {width: 10, height: 10}
    assert.equal(isSquare(rectangle2), true)
  })
})
