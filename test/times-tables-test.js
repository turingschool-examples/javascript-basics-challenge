const assert = require('chai').assert
const [rawTimesTable, timesTable] = require('../lib/times-tables')
const stdout = require("test-console").stdout;

describe("Times Tables", () => {
  it("rawTimesTable returns times table for every integer up to 5", () => {
    var expected = [[1,2,3,4,5],[2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]
    assert.deepEqual(rawTimesTable(5), expected)
  })

  it("rawTimesTable returns times table for every integer up to 5", () => {
    var expected = [[1,2],[2, 4]]
    assert.deepEqual(rawTimesTable(2), expected)
  })

  it("timesTable is printed to console with each row on its  own line", () => {
    var result = stdout.inspectSync(function() {
      timesTable(2)
    })
    var expected = "1 2\n2 4\n"
    assert.deepEqual(result[0], expected)
  })

  it("calls function in console", () => {
    var result = stdout.inspectSync(function() {
      timesTable(5)
    })
    var expected = "1 2 3 4 5\n2 4 6 8 10\n3 6 9 12 15\n4 8 12 16 20\n5 10 15 20 25\n"
    assert.deepEqual(result[0], expected)
  })
})
