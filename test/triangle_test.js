const assert = require('chai').assert
const isTriangle = require('../lib/triangle')

describe("calculates aspects of triangle", () => {
  it("can determine if a triangle could be formed", () => {
    assert.equal(isTriangle(0,0,0), false)
    assert.equal(isTriangle(4,4,4), true)
    assert.equal(isTriangle(6,8,10), true)
    assert.equal(isTriangle(-2,1,5), false)
  })
})
