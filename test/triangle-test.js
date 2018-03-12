const assert = require('chai').assert
const Triangle = require('../lib/triangle.js')

describe("Triangle class", () => {
  it("can tell if the input sides could make a triangle", () =>{
    let t4 = new Triangle(-2,1,4)
    assert.equal(t4.isTriangle(), false)

    let t2 = new Triangle(0,4,4)
    assert.equal(t2.isTriangle(), false)

    let t3 = new Triangle(6,8,10)
    assert.equal(t3.isTriangle(), true)

    let t1 = new Triangle(4,4,4)
    assert.equal(t1.isTriangle(), true)

    let t5 = new Triangle(4,8,50)
    assert.equal(t5.isTriangle(), false)
  })
})
