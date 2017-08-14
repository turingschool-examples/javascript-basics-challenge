const assert = require('chai').assert;
const total = require('../lib/averages').total;
const mean = require('../lib/averages').mean;
const median = require('../lib/averages').median;

describe("Average calculations", () => {
  context("Given a dataset", () => {
    var data = [3, 1, 2, 4];

    it("calculates the sum", () => {
      assert.equal(total(data), 10);
    });

    it("calculates the mean", () => {
      assert.equal(mean(data), 2.5);
    });

    it("calculates the median", () => {
      var even_number_of_elements = [3, 1, 2, 4];
      var odd_number_of_elements = [3, 1, 2];
      assert.equal(median(even_number_of_elements), 2.5);
      assert.equal(median(odd_number_of_elements), 2);
    });
  });
});
