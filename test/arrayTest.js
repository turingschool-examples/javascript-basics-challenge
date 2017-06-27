const Array  = require('../lib/array')
const assert = require('chai').assert

describe("Array", () => {
  context("#pad", () => {
    it("with nulls", () => {
      let array     = [1, 2, 3]
      let assertion = array.pad(5)
      let expected  = [1, 2, 3, null, null]

      assert.deepEqual(assertion, expected)
    })

    it("with num and context", () => {
      let array     = [1,2,3]
      let assertion = array.pad(5, "apple")
      let expected  = [1, 2, 3, "apple", "apple"]

      assert.deepEqual(assertion, expected)
    })
  })
})
