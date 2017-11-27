var expect    = require("chai").expect;
var averages = require("../app/averages");

describe("Average function thing", function() {
  it("performs average functions on an array", function() {

    var array = [3, 5, 7, 10, 12, 2]

    var triangleCheckOne = averages.total(-2,1,5);
    var triangleCheckTwo = averages.mean(0,0,0);
    var triangleCheckThree = averages.median(4,4,4);
    var triangleCheckThree = averages.mode(4,4,4);


    expect(triangleCheckOne).to.deep.equal(false);
    expect(triangleCheckTwo).to.deep.equal(false);
    expect(triangleCheckThree).to.deep.equal(true);

    });
  });
