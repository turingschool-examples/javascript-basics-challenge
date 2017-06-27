const assert = require('chai').assert;
const rectangles = require('../rectangles');
const triangles = require('../triangles')
var rectangle = {
  width : 10,
  height : 20
};
var square = {
  width : 10,
  height : 10
};

describe("it can do the rectangular functions", function(){
  it("can find the area of a rectangle", function(){
    assert.equal(rectangles.area(rectangle), 200);
  });
  it("can find the perimeter of a rectangle", function(){
    assert.equal(rectangles.perimeter(rectangle), 60);
  });
  it("can find the diagonal of a rectangle", function(){
    assert.equal(Math.round(rectangles.diagonal(rectangle)), 22);
  });
  it("can find the squareness of a rectangle", function(){
    assert.equal(rectangles.isSquare(rectangle), false);
    assert.equal(rectangles.isSquare(square), true);
  });

});

 describe('it can to the triangle function', function(){
   it("can find out the possibility of triangleness", function(){
     assert.equal(triangles.isTriangle(0,0,0), false);
     assert.equal(triangles.isTriangle(10,8,6), true);
     assert.equal(triangles.isTriangle(16,8,6), false);
     assert.equal(triangles.isTriangle(16,8,-6), false);
   });
 });
