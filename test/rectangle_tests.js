const assert = require('chai').assert
const tangs = require('../rectangles')
// var pry = require('pry.js');
// eval(pry.it);
// const perimeter = require('../rectangles')

describe("area function", function(){
  it("calculates area of a rectangle", function(){
    var rectangle = {width: 10, height: 20};
    assert.equal(tangs.area(rectangle), 200)
  });
});

describe("perimeter function", function(){
  it("calculates perimeter of a rectangle", function(){
    var rectangle = {width: 10, height: 20};
    assert.equal(tangs.perimeter(rectangle), 60)
  });
});

describe("diagonal function", function(){
  it("calculates diagonal function of a rectangle", function(){
    var rectangle = {width: 10, height: 20};
    assert.equal(tangs.diagonal(rectangle), Math.sqrt(500))
  });
});

describe("isSquare function", function(){
  it("returns T/F if squared", function(){
    var rectangle = {width: 10, height: 10};
    assert.equal(tangs.isSquare(rectangle), true)
  });
});
