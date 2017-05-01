const assert = require('chai').assert
const insertionSort = require('../lib/rectangle')

describe('rectangles', function() {
 it("can return the area", function () {
   var rectangle = {width: 10, height: 20}
   assert.equal(area(rectangle), 200)
 });
});
