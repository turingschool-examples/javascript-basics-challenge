const assert = require('chai').assert;
require('../averages');

describe('averages functions', function() {

  it('returns the total of all the values in the array', function() {
    var arr = [1, 2, 4, 6, 9];
    assert.equal(arr.sum(), 22);
    var arr = [3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29];
    assert.equal(arr.sum(), 331);
  });

  it('returns the mean (average) of the array', function() {
    var arr = [1, 2, 4, 6, 9];
    assert.equal(arr.mean(), 4.4);
    var arr = [3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29];
    assert.equal(arr.mean(), 22.07);
  });

  it('returns the median of the array', function() {
    var arr = [1, 2, 4, 6, 9];
    assert.equal(arr.median(), 5)
    var arr = [3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29];
    assert.equal(arr.median(), 23);
  });

  it('returns an object representing the mode(s) of the array with the property being the mode and the value being the frequency', function() {
    var arr = [3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29];
    assert.equal(arr.mode(), { '23': 4 });
  });


});
