const assert = require('chai').assert
const pad = require('../lib/pad')
var pry = require('pryjs');

describe("pad", function(){
  it("is able to pad an array with null if num is greater than length", function(){
    var array = [1,2,3]
    assert.deepEqual(array.pad(5), [1,2,3, null, null])
  });

  it("returns original array if argument is equal to or less than length of array", function(){
    var array = [1,2,3]
    assert.deepEqual(array.pad(3), array)
    assert.deepEqual(array.pad(0), array)
  });

  it("returns an array padded with inputted value for second arguement", function(){
    var array = [1,2,3]
    var paddedArray = [1,2,3, 'apple', 'apple']
    assert.deepEqual(array.pad(5, 'apple'), paddedArray)
  });
});
