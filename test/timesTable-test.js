const assert = require('chai').assert;
const timesTableFunctions = require('../timesTable');

describe("Times table", function() {
  it("creates a times table with the number of rows sent in the argument", function() {
    assert.deepEqual("1 2 3 4 5 \n 2 4 6 8 10 \n", timesTableFunctions.timesTable(2))
    assert.deepEqual("1 2 3 4 5 \n 2 4 6 8 10 \n 3 6 9 12 15 \n", timesTableFunctions.timesTable(3))
    assert.deepEqual("1 2 3 4 5 \n 2 4 6 8 10 \n 3 6 9 12 15 \n 4 8 12 16 20 \n 5 10 15 20 25 \n", timesTableFunctions.timesTable(5))
  })
})
