const assert = require('chai').assert
const Rectangle = require('../lib/rectangle.js')

describe("Rectangle functions", () => {
  it("can find the area of a rectangle", () => {
    let r = new Rectangle({width:10, height:20})
    assert.equal(r.area(), 200)
  })

  it("can find the perimeter of a rectangle", () => {
    let r = new Rectangle({width:10, height:20})
    assert.equal(r.perimeter(), 60)
  })

  it("can find the length of the rectangle's diagonal", () => {
    let r = new Rectangle({width:10, height:20})
    assert.equal(r.diagonal(), 22.36)
  })

  it("can determine if the rectangle is a square", () => {
    let r = new Rectangle({width:10, height:20})
    assert.equal(r.isSquare(), false)

    let s = new Rectangle({width:10, height:10})
    assert.equal(s.isSquare(), true)
  })



})
