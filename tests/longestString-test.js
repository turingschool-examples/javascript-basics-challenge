const assert = require('chai').assert
const string = require('../longestString')


describe("it tests rectangle", function() {
  it("returns the rect", function() {
    assert.deepEqual(string.longestString(["a", "abc", "food"]), "food");
  });
});
