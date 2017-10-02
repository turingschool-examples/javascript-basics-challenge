const assert = require('chai').assert
const longestString = require('../longestString')

describe("find longest string", function() {
  it("finds the longest string", function() {
    assert.deepEqual(longestString.longestString(), "it works!")
  });
});
