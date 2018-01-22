var expect = require("chai").expect;
var countBetween = require("../app/count-numbers-between");

describe("Count Numbers Between is a function", function() {
  it("counts the amnt of numbers, in the array, between the 2 arguments", function() {

    var firstCount = countBetween.countNumbersBetween([25, 2, 8], 0, 100);
    var secondCount = countBetween.countNumbersBetween([-19, 1, 22], 0, 100);
    var thirdCount = countBetween.countNumbersBetween([100, 200, 300], 100, 300);
    var fourthCount = countBetween.countNumbersBetween([], -10, 10);
    var fifthCount = countBetween.countNumbersBetween([5], 5, 5);

    expect(firstCount).to.deep.equal(3);
    expect(secondCount).to.deep.equal(2);
    expect(thirdCount).to.deep.equal(3);
    expect(fourthCount).to.deep.equal(0);
    expect(fifthCount).to.deep.equal(1);
  })
})
