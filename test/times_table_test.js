var expect    = require("chai").expect;
var timesTables = require("../app/times_table");

describe("Times table function thing", function() {
  it("prints out a times table of a number", function() {

    var num = 4;

    var multTable = timesTables.timesTable(num);

    expect(multTable).to.deep.equal('1,2,3,4\n2,4,6,8\n3,6,9,12\n4,8,12,16');

    });
  });
