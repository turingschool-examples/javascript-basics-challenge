const assert = require('chai').assert;
const longestString = require('../lib/longest-string');

describe("Getting the longest string", () => {
  context("Given an array of strings", () => {
    it("finds the longest string", () => {
      var data = ['horses', 'cats', 'pineapples'];
      assert.equal(longestString(data), 'pineapples');
    });

    it("returns null when supplied with invalid data", () => {
      var invalid_data = ['horses', 1, 'cats'];
      assert.equal(longestString(invalid_data), null);
    });
  });
});
