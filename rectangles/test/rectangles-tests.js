var assert = require('chai').assert;
var area = require('../area');
var perimeter = require('../perimeter');
var diagonal = require('../diagonal')

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
