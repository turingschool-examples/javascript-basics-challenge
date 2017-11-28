const assert = require('chai').assert;
const area = require('../lib/rectangle');

describe("Rectangle", function() {
  context("area", function() {
    it("calculates area of a rectangle", function() {
      var rectangle = {width: 10, height: 20};
      assert.equal(area(rectangle), 200);
    });
  });
});