const assert = require('chai').assert
const [total, mean, median, mode] = require('../lib/averages')

describe("Averages", () => {
  let array = [1,3,4,1,5,5,2,2,2]

  context("total", () => {
    it("returns the total from the array", () => {
      assert.equal(total(array), 25)
    })
  })

  context("mean", () => {
    it("returns the mean from the array", () => {
      assert.equal(mean(array).toFixed(2), 2.78)
    })
  })

  context("median", () => {
    it("returns the median from the array", () => {
      assert.equal(median(array), 2)
    })
  })

  context("mode", () => {
    it("returns the most common value from the array", () => {
      assert.equal(mode(array), 2)
    })
  })
})
