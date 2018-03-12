assert = require('chai').assert
expect = require('chai').expect
const timesTableFunctions = require('../lib/times-table')

describe("timesTable functions", ()=> {
  it("can calculate the times tables given a number", () => {
    assert.equal(timesTableFunctions.timesTable(5), '\n1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n')
  })
})