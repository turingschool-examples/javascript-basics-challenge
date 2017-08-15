const assert = require('chai').assert;

describe("Times Table", () => {
  context("Given an integer representing a number of rows", () => {
    it("produces a times table with that number of rows", () => {
      var number_of_rows = 5;
      var result = "1  2  3  4  5\n2  4  6  8  10\n3  6  9  12 15\n4  8  12 16 20\n5  10 15 20 25";
      assert.equal(timesTable(number_of_rows), result);
    });
  });
});
