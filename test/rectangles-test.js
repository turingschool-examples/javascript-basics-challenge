const assert = require('chai').assert;
const rect = require("../lib/rectangles");

describe("rectangles", function(){
  it("can generate the area of a rectangle", function(){
    var rectangle = {width: 11, height: 222};
    var result = 2442;

    assert.deepEqual(rect.area(rectangle), result);
  });

  it("can generate the perimeter of a rectangle", function(){
    var rectangle = {width: 11, height: 222};
    var result = 466;

    assert.deepEqual(rect.perimeter(rectangle), result);
  });

  it("can generate the diagonal of a rectangle", function(){
    var rectangle = {width: 115, height: 252};
    var result = 277;

    assert.deepEqual(rect.diagonal(rectangle), result);
  });

  it("can determine a square", function(){
    var rectangle = {width: 111, height: 111};
    var result = true;

    assert.deepEqual(rect.isSquare(rectangle), result);
  });

});
