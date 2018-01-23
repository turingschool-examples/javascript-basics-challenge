const assert = require('chai').assert
const longestStringFunction = require('../longestString')

describe("longest string function", function () {
  it("can return the longest string in an array", function () {
    let array1 = ["dog", "frog", "mouse", "centipede"]

    assert.equal(longestStringFunction.longestString(array1), "centipede");
    assert.notEqual(longestStringFunction.longestString(array1), "dog");
  });
})