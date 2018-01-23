const assert = require('chai').assert;
const geometry = require('../lib/rectangles')

describe("when passed a rectangle object", function(){
  it("can calculate the area", function(){
    var rectangle = { width: 10, height: 20 }
    assert.equal(200, geometry.area(rectangle) );
  });

  it("can calculate perimeter", function(){
    var rectangle = { width: 10, height: 20 }
    assert.equal(60, geometry.perimeter(rectangle))    
  });

  it("can calculate diagonal", function(){
    var rectangle = { width: 10, height: 20 }
    assert.equal(22, geometry.diagonal(rectangle))
  });

  it("returns true if square and false if not", function(){
    var rectangle = { width: 10, height: 20 }
    assert(!geometry.isSquare(rectangle))
  });
});