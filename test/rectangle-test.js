const assert = require('chai').assert
const {rectangleArea, rectanglePerimeter, rectangleDiagonal, rectangleSquare} = require('../lib/rectangle')

describe('rectangle functionality', function() {
  it("can return area", function() {
    var rectangle = {width: 10, height: 20}
    assert.equal(rectangleArea(rectangle), 200);
  })

  it("can return permimeter", function() {
    var rectangle = {width: 10, height: 20}
    assert.equal(rectanglePerimeter(rectangle), 60);
  })

  it("can return diagonal", function() {
    var rectangle = {width: 10, height: 20}
    assert.equal(rectangleDiagonal(rectangle), 7.745966692414834);
  })

  it("can check if square", function() {
    var rectangle = {width: 10, height: 20}
    assert.equal(rectangleSquare(rectangle), false);
  })
});
