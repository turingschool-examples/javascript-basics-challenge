var assert = require('chai').assert
var area = require('../area')

describe("it can measure a rectangle", function() {
  it(", specifically, the area", function() {
    var rectangle = {width: 10, height: 20}
    assert.equal(area(rectangle), 200)
  })
})
