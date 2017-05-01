const assert = require('chai').assert
const rectangle = require('../lib/rectangle')
var pry = require('pryjs');

describe('rectangles', function() {
   it("can return the area", function () {
     var actualRectangle = {width: 10, height: 20}
     assert.equal(rectangle.area(actualRectangle), 200)
   });

   it("can return the perimeter", function(){
     var actualRectangle = {width: 10, height: 20}
     assert.equal(rectangle.perimeter(actualRectangle), 60)
   });

   it ("can return the diagonal", function(){
    var actualRectangle = {width: 10, height: 20}
    assert.equal(rectangle.diagonal(actualRectangle), 22.36)
   });

   it("can tell if the rectangle is a square", function(){
     var actualRectangle = {width: 10, height: 20}
     assert.equal(rectangle.isSquare(actualRectangle), false)
     var square = {width: 10, height: 10}
     assert.equal(rectangle.isSquare(square), true)
   })

});
