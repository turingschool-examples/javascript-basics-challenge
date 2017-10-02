const assert = require('chai').assert
const count = require('../longestString')

describe("find longest string", function() {
  it("finds the longest string", function() {
    assert.deepEqual(count.longestString(['a', 'bc', 'def']), 'def');
  });
});
