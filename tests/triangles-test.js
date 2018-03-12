assert = require('chai').assert 
expect = require('chai').expect
const triangleFunctions = require('../lib/triangles')

describe("methods on a triangle",() =>{
  it("returns true when we have a right angled triangle", () =>{
    expect(triangleFunctions.legitTriangle(3,4,5)).to.be.true
  })
  it("returns false when we have a triangle that does not exist", () =>{
    expect(triangleFunctions.legitTriangle(3,4,1)).to.be.false
  })
  it("returns false when we when we have a triangle with negative side length",() =>{
    expect(triangleFunctions.legitTriangle(-3, -4, 1)).to.be.false
  })
  it("returns true when we have an equilateral triangle",() => {
    expect(triangleFunctions.legitTriangle(4, 4, 4)).to.be.true
  })
})

