const assert = require('chai').assert
const averageFunctions = require('../averages')

describe("Average functions", function () {
  it("can calculate the total", function () {
    let array1 = [2, 3, 3, 4];

    assert.equal(averageFunctions.total(array1), 12);
  });

  it("can calculate the mean", function () {
    let array1 = [2, 3, 3, 4];

    assert.equal(averageFunctions.mean(array1), 4);
  });
})