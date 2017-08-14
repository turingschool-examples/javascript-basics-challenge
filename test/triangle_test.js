const assert = require("chai").assert
const isTriangle = require('../triangle')

const pry = require('pryjs')

it("knows triangles", function() {
    assert.isFalse(isTriangle(0, 0, 0))
    assert.isFalse(isTriangle(-2, 1, 5))
    assert.isFalse(isTriangle(4, 8, 50))
    assert.isTrue(isTriangle(4, 4, 4))
    assert.isTrue(isTriangle(6, 8, 10))
    assert.isTrue(isTriangle(8, 6, 10))
    assert.isTrue(isTriangle(10, 8, 6))
})