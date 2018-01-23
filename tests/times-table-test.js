const assert = require('chai').assert
const timesTableFunction = require('../timesTable')

describe("times table function", function () {
  it("can return a times table", function () {
    assert.equal(timesTableFunction.timesTable(5), "1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n")
    assert.equal(timesTableFunction.timesTable(-4), "Cannot Compute")
    assert.equal(timesTableFunction.timesTable(null), "Cannot Compute")
  });
})