const assert = require('chai').assert
const strings = require('../lib/longest-string')

describe("Longest string", function() {
  it("returns the longest string", function() {
    let stringsList = ["cat", "fish", "puppy"]
    let result = strings.longestString(stringsList)
    assert.equal(result, "puppy")
  });
});
