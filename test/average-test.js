var assert = require('chai').assert;
var functions = require('../lib/averages');
var array = [10, 0, 9, 2, 8, 3, 7, 4, 6, 5];
var array1 = [1, 2, 3, 4, 5];

describe("Averages", function () {
  it("total", function () {
    assert.equal(functions.total(array), 54);
  })

  it("mean", function () {
    assert.equal(functions.mean(array), 5.4);
  })

  it("median", function () {
    assert.equal(functions.median(array), 5.5);
    assert.equal(functions.median(array1), 3);
  })

  it("mode", function () {
    var mode = {
      "10": 1
    }
    assert.deepEqual(functions.mode(array), mode)
  })
})