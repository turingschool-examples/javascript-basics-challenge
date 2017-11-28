const assert = require('chai').assert;
const Rectangle = require('../lib/rectangle');

describe('Rectangle', function() {
  var rectangle = new Rectangle;
  it('can find the area', () => {
    var shape = {width: 10, height: 20};
    assert.equal(rectangle.area(shape), 200);
  });





})
