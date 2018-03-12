assert = require('chai').assert 
var expect = require('chai').expect
const rectangleFunctions = require('../lib/rectangles')

describe("methods on a rectangle",() => {
  it("can calculate the area of a rectangle",() => {
    const rectangle = {width: 10, height: 20}
    assert.equal(rectangleFunctions.area(rectangle), 200)
  })
  it("can calculate the perimeter of a rectangle",()=> {
    const rectangle = { width: 10, height: 20 }
    assert.equal(rectangleFunctions.perimeter(rectangle), 60)
  })
  it("can calculate the diagonal of a rectangle", ()=>{
    const rectangle = { width: 10, height: 20 }
    assert.equal(rectangleFunctions.diagonal(rectangle),22.4)
  })
  it("can determine if the rectangle is a square",() => {
    const rectangle = { width: 10, height: 20 }
    expect(rectangleFunctions.isSquare(rectangle)).to.be.false
  })
})