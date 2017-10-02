const assert = require('chai').assert;
const timesTable = require('../timesTable');

describe("", function(){
  it("successfully returns a times table for a given integer", function(){
    assert.equal("1 2 3\n2 4 6\n3 6 9", timesTable(3));
  })
});
