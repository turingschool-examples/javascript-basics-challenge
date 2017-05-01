const assert = require('chai').assert
const rectangle = require('../lib/rectangle')
var pry = require('pryjs');

describe('rectangles', function() {
 it("can return the area", function () {
  //  eval(pry.it);
   var actualRectangle = {width: 10, height: 20}
   assert.equal(rectangle.area(actualRectangle), 200)
 });
});
