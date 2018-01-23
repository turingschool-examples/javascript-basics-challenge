const assert = require('chai').assert
const averageFunctions = require('../averages')

describe("Average functions", function () {
  it("can calculate the total", function () {
    let array1 = [2, 3, 3, 4];

    assert.equal(averageFunctions.total(array1), 12);
  });

  it("can calculate the mean", function () {
    let array1 = [2, 3, 3, 4];

    assert.equal(averageFunctions.mean(array1), 3);
  });

  if("it can sort an unordered array", function() {
    let array1 = [3, 2, 4, 3];

    assert.isArray(averageFunctions.sortNums(array1))
    assert.deeplyequal(averageFunctions.sortNums(array1), [2, 3, 3, 4])
  });

  it("can calculate the median", function () {
    let array1 = [2, 3, 3, 4];
    let array2 = [2, 4, 8];
    let array3 = [2, 3, 3, 4, 8, 2, 5, 1];
    let array4 = [2, 4, 8, 7, 3, 1, 3];

    assert.equal(averageFunctions.median(array1), 3);
    assert.equal(averageFunctions.median(array2), 4);
    assert.equal(averageFunctions.median(array3), 3);
    assert.equal(averageFunctions.median(array4), 3);
  });

  it( "can calculate the mode", function () {
    let array1 = [2, 3, 3, 4];
    let array2 = [1, 2, 3, 4];

    assert.equal(averageFunctions.mode(array1), 3);
    assert.equal(averageFunctions.mode(array2), 1);
  });
})