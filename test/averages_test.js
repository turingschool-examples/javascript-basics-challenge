const assert = require('chai').assert
const [total, mean, median, mode] = require('../lib/averages')

describe("it can calculate various averages", () => {
  let input = [5,1,5,9,5]
  it("total", () => {
    assert.equal(total(input), 25)
  })
  it("mean", () => {
    assert.equal(mean(input), 5)
  })
  it("median", () => {
    assert.equal(median(input), 5)
  })
  it("mode", () => {
    assert.equal(mode(input), 5)
  })
})
