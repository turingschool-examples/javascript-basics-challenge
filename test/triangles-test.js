const assert = require("chai").assert
const isTriangle = require("../triangles")

describe('Determine whether the sides can make a triangle', () => {
  it('can identify an equilateral triangle', () => {
    assert.equal(isTriangle(4,4,4), true)
  })
  
  it('can identify a right triangle', () => {
    assert.equal(isTriangle(6,8,10), true)
  })
  
  it('can identify the same right triangle', () => {
    assert.equal(isTriangle(8,6,10), true)
  })
  
  it('can identify the same right triangle again', () => {
    assert.equal(isTriangle(10,8,6), true)
  })
  
  it('can determine when sides do not make a triangle', () => {
    assert.equal(isTriangle(4,8,50), false)
  })
  
  it('can determine that 0-length sides do not make a triangle', () => {
    assert.equal(isTriangle(0,2,4), false)
  })
  
  it('can determine that all 0-length sides do not make a triangle', () => {
    assert.equal(isTriangle(0,0,0), false)
  })
  
  it('can determine that negative side lenghts do not make a triangle', () => {
    assert.equal(isTriangle(-3,4,5), false)
  })
})