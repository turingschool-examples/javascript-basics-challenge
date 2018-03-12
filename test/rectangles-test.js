var chai = require('chai');
var assert = require('assert');
var pry = require('pryjs')
var area = require("../rectangles").area
var perimeter = require("../rectangles").perimeter
var diagonal = require("../rectangles").diagonal
var isSquare = require("../rectangles").isSquare

// is there way to declare global var rectangle so i dont have to put it in every test?

describe("Rectangle Unit Test", function(){
  it("Area returns area of rectangle", function(){
    var rectangle = {width: 10, height: 20}
    assert.equal(rectangle.width, 10 );
    assert.equal(rectangle.height, 20);

    assert.equal(area(rectangle), 200 )

  })

  it("perimeter returns perimeter of rectangle", function(){
    var rectangle = {width: 10, height: 20}

    assert.equal(perimeter(rectangle), 60 )
  })

  it("diagonal returns diagonal of rectangle", function(){
    var rectangle = {width: 10, height: 20}

    assert.equal(diagonal(rectangle), 22.360679774997898 )
  })

  it("isSquare returns true if rectangle is Gabe", function(){
    var rectangle = {width: 10, height: 20}

    assert.equal(isSquare(rectangle), false )
  })

})
