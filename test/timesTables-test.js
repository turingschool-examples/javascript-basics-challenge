const assert = require('chai').assert;
const timesTable = require("../lib/timesTable");

describe("rectangles", function(){
  it("can generate the area of a rectangle", function(){
    var number = 5
    var result = '\n1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 ';

    assert.deepEqual(timesTable(number), result);
  });

});
