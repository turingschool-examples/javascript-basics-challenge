var expect = require("chai").expect;
var timesTables = require("../app/timestable");

describe("Timestable creates a thing", function() {
  it("creates a timestable for 1 number", function() {

    var timesTableGrid = timesTables.timesTable(4);

    expect(timesTableGrid).to.deep.equal('1,2,3,4\n2,4,6,8\n3,6,9,12\n4,8,12,16')
  })
})
