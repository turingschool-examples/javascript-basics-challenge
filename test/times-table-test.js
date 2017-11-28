const assert = require('chai').assert;
const timesTable = require('../lib/times-table');

describe("Times Table", function() {
  context("timesTable", function() {
    it("returns a times table for a given number", function() {
      assert.equal(timesTable(4), "1 2 3 4 \n2 4 6 8 \n3 6 9 12 \n4 8 12 16 \n");
    })
  })
})