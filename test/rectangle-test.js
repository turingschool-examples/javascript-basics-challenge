const assert = require('chai').assert
const Rectangle = require('../lib/rectangle.js')

describe("Rectangle functions", () => {
  it("can find the area of a rectangle", () => {
    let r = new Rectangle({width:10, height:20})
    assert.equal(r.area(), 200)
  })

  

})
