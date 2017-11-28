const assert = require('chai').assert
const rectangleFunctions = require('../rectangle')
const rectangle = {width: 10, height: 20}
const square = {width:10, height: 10}


describe("Rectangle properties", function() {
  it("can calculate area", function() {
    assert.equal(200, rectangleFunctions.area(rectangle))
  })

  it("can calculate perimeter", function() {
    assert.equal(60, rectangleFunctions.perimeter(rectangle))
  })

  it("can calculate the diagonal", function() {
    assert.equal(22.36, rectangleFunctions.diagonal(rectangle)) 
  })

  it("can tell if square", function() {
    assert.isTrue(rectangleFunctions.isSquare(square))
  })

  it("can tell if not square", function() {
    assert.isFalse(rectangleFunctions.isSquare(rectangle))
  })
})
