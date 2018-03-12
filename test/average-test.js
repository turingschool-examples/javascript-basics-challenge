const assert = require('chai').assert
const ArrayStats = require('../lib/average.js')

describe("Average class", () => {
  it("can find the total of the array", () => {
    let x = new ArrayStats([1,4,6,7])
    assert.equal(x.total(), 18)
  })

  it("can find the mean of the array", () => {
    let x = new ArrayStats([1,4,6,7])
    assert.equal(x.mean(), 4.5)
  })

  it("can find the median of the array", () => {
    let x = new ArrayStats([1,4,7,6,5])
    assert.equal(x.median(), 5)

    let y = new ArrayStats([4,6,5,1])
    assert.equal(y.median(), 4.5)
  })

  it ("can find the mode of an array", () => {
    let x = new ArrayStats([1,4,7,6,5,4])
    assert.deepEqual(x.mode(), {4: 2})
  })


})
