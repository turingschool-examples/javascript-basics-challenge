const assert = require("chai").assert
const rectangles = require("../rectangles")

describe('Properties of a rectangle', () => {
  var rectangle = {width: 10, height: 20}
  
  it('calculates the area of a rectangle', () => {
    assert.equal(rectangles.area(rectangle), 200)
  })
  
  it('calculates the perimeter of a rectangle', () => {
    assert.equal(rectangles.perimeter(rectangle), 60)
  })
  
  it('calculates the diagonal of a rectangle', () => {
    assert.equal(rectangles.diagonal(rectangle), 22.36)
  })
  
  it('determines whether a rectangle is square', () => {
    assert.equal(rectangles.isSquare(rectangle), false)
  })
})