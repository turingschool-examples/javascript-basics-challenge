const expect = require('chai').expect
const ArrayFunctions = require('../averages')

describe("Array functions", function() {
  context("total", function() {
    it("returns the total of all values", function() {
      var array = [1,2,3]

      expect(ArrayFunctions.total(array)).to.equal(6)
    })
  })

  context("mean", function() {
    it("returns the mean/average an array's values", function() {
      var array = [1,2,3]

      expect(ArrayFunctions.mean(array)).to.equal(2)
    })
  })

  context("median", function() {
    it("returns the median of an array's values", function() {
      expect(ArrayFunctions.median([2,1,3])).to.equal(2)
      expect(ArrayFunctions.median([2,1,3,6,4,5])).to.equal(3.5)
    })
  })

  context("mode", function() {
    it("returns an object with the mode(s) as properties and frequencies as values", function() {
      expect(ArrayFunctions.mode([1,2,2,3])).to.deep.equal({2: 2})
      expect(ArrayFunctions.mode([1,2,2,3,3])).to.deep.equal({2: 2, 3: 2})
    })
  })
})
