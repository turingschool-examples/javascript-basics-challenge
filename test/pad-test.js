const pad = require('../lib/pad');
const assert = require('chai').assert;

describe("pad functionality", function() {
  it("adds elements to an array", function() {
    var numbers = [1, 2, 3, 4];
    var new_numbers = numbers.pad(6, "cat")
    assert.deepEqual(new_numbers, [1, 2, 3, 4, "cat", "cat"]);
  });

  it("adds undefined elements to an array", function() {
    var numbers = [1, 2, 3, 4];
    var new_numbers = numbers.pad(6)
    assert.deepEqual(new_numbers, [1, 2, 3, 4, undefined, undefined]);
  });
});
