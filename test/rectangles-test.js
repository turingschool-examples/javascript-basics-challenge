const rectangles = require('../lib/rectangles')
const expect = require('chai').expect
var pry = require('pryjs');
var rectangle = {width: 10, height: 20}

describe('rectangle functions', function(){
  it('#area returns area of rectangle', function(){

    expect(rectangles.area(rectangle)).to.eql(200)
  })
  it('#perimeter returns the perimeter of rectangle', function(){
    expect(rectangles.perimeter(rectangle)).to.eql(60)
  })
  it('#diagonal returns the diagonal of rectangle', function(){
    expect(rectangles.diagonal(rectangle)).to.eql(22)
  })
  it('#isSquare returns a boolean indicating if the rectangle is square', function(){
    var square = {width: 5, height: 5};

    expect(rectangles.isSquare(square)).to.be.true
    expect(rectangles.isSquare(rectangle)).to.be.false
  })
})
