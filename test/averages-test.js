const assert = require('chai').assert;
const total = require('../lib/averages');

describe("Average calculations", () => {
  context("Given a dataset", () => {
    var data = [3, 1, 2, 4];
    it("calculates the sum", () => {
      assert.equal(total(data), 10);
    });
  });
});
