const assert = require('chai').assert;
const total = require('../averages').total;
const mean = require('../averages').mean;
const median = require('../averages').median;
const mode = require('../averages').mode;

describe("averages functions", function(){
  it("returns the total of all the values in the array", function() {
    var expected = 15;
    var actual = total([1, 2, 3, 4, 5]);
    assert.equal(expected, actual);
  });

  it("returns the mean (average) of the array", function() {
    var expected = 3;
    var actual = mean([1, 2, 3, 4, 5]);
    assert.equal(expected, actual);
  });

  it("returns the median of the array", function() {
    var expected = 3;
    var actual = median([1, 2, 3, 4, 5]);
    assert.equal(expected, actual);
  });

  it("returns an object representing the mode(s) of the array with the property being the mode and the value being the frequency", function() {
    var expected = {2: 4};
    var actual = mode([1, 2, 3, 4, 5, 2, 3, 5, 2, 1, 2]);
    assert.deepEqual(expected, actual);
  });
})
