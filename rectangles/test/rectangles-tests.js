var assert = require('chai').assert;
var area = require('../area');
var perimeter = require('../perimeter');

describe("it can measure a rectangle, specifically: ", function() {
  it("the area", function() {
    var rectangle = {width: 10, height: 20};
    assert.equal(area(rectangle), 200);
  })

  it("the perimeter", function() {
    var rectangle = {width: 10, height: 20};
    assert.equal(perimeter(rectangle), 60);
  })
})
