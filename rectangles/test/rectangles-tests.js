var assert = require('chai').assert;
var area = require('../area');
var perimeter = require('../perimeter');
var diagonal = require('../diagonal')
var isSquare = require('../is-square')

describe("it can measure a rectangle, specifically: ", function() {
  it("the area", function() {
    var rectangle = {width: 10, height: 20};
    assert.equal(area(rectangle), 200);
  })

  it("the perimeter", function() {
    var rectangle = {width: 10, height: 20};
    assert.equal(perimeter(rectangle), 60);
  })

  it("the diagonal", function() {
    var rectangle = {width: 7, height: 24};
    assert.equal(diagonal(rectangle), 25)
  })
})

describe("it can determine the shape", function() {
  it("square", function() {
    var rectangle = {width: 7, height: 7};
    assert.equal(isSquare(rectangle), true);
  })

  it("rectangle", function() {
    var rectangle = {width: 10, height: 20};
    assert.equal(isSquare(rectangle), false);
  })
})
