const assert = require('chai').assert;
const averages = require("../lib/averages");

describe("averages", function(){
  it("can generate the total", function(){
    var numbers = [5, 3, 4, 1, 6, 2, 7, 8];
    var result = 36;

    assert.deepEqual(averages.total(numbers), result);
  });

  it("can generate the mean", function(){
    var numbers = [5, 3, 4, 1, 6, 2, 7, 8];
    var result = 4.5;

    assert.deepEqual(averages.mean(numbers), result);
  });

  it("can generate the median", function(){
    var numbers = [5, 3, 4, 1, 6, 2, 7, 8, 9];
    var result = 5;

    assert.deepEqual(averages.median(numbers), result);
  });

  it("can generate the mode", function(){
    var numbers = [5, 3, 4, 1, 6, 2, 7, 8, 8];
    var result = 8;

    assert.deepEqual(averages.mode(numbers), result);
  });

});
