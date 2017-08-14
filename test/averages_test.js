const assert = require('chai').assert
const averages = require('../lib/averages.js')

// Write a function for each of the following. Each function will take an Array as the one argument.
// median - returns the median of the array
// mode- returns an object representing the mode(s) of the array with the property being the mode and the value being the frequency

describe('Given an array of numbers', function() {

  it('can return the total of the values', function() {
    var arr = [1, 2, 3, 4];

    var actual = averages.total(arr);
    var expected = 10;

    assert.equal(actual, expected);
  });

  it('can return the mean', function() {
    var arr = [2, 4, 6, 8, 10]

    var actual = averages.mean(arr);
    var expected = 6;

    assert.equal(actual, expected);
  });

  it('can return the median', function() {
    var arr = [5, 2, 6, 11, 9, 22, 14];

    var actual = averages.median(arr);
    var expected = 9;

    assert.equal(actual, expected);
  });

  it('can return an object representing the mode(s)', function() {

  });
})
