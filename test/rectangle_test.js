const assert = require("chai").assert
const Rectangle = require('../rectangle')

const pry = require('pryjs')

it("can make a rectangle", function() {
    let rect = new Rectangle(10, 20)
    assert.equal(rect.length, 10)
    assert.equal(rect.width, 20)
})

it("find area", function() {
    let rect = new Rectangle(10, 20)
    assert.equal(rect.area, 200)
})

it("find perimeter", function() {
    let rect = new Rectangle(10, 20)
    assert.equal(rect.perimeter, 60)
})

it("find diagonal", function() {
    let rect = new Rectangle(3, 4)
    assert.equal(rect.diagonal, 5)
})

it("finds if Square", function() {
    let rect = new Rectangle(3, 3)
    assert.isTrue(rect.isSquare)
    let rect_2 = new Rectangle(3, 4)
    assert.isFalse(rect_2.isSquare)
})