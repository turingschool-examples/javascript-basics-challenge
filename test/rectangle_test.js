const assert = require('chai').assert;
const Rectangle = require('../lib/rectangle');

describe('Rectangle', function() {
  var rectangle = new Rectangle;
    it('can find the area', () => {
      var shape = {width: 10, height: 20};
      assert.equal(rectangle.area(shape), 200);
    });

    it('can find the perimeter', () => {
      var shape = {width: 10, height: 20};
      assert.equal(rectangle.perimeter(shape), 60);
    });

    it('can find the diagnol', () => {
      var shape = {width: 10, height: 20};
      assert.equal(rectangle.diagnol(shape), 22.36);
    });


});
