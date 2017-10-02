const assert = require('chai').assert;
const Rectangle = require('../lib/rectangle');
const pryjs = require('pryjs');

describe('Reactangle', function() {
  var rectangle = new Rectangle;
  it('can find the area', () => {
    var shape = {width: 10, height: 20};
    assert.equal(rectangle.area(shape), 200);
  });

  it('can find the perimeter', () => {
    var shape = {width: 10, height: 20};
    assert.equal(rectangle.perimeter(shape), 60);
  });

  it('can find the diagonal', () => {
    var shape = {width: 10, height: 20};
    assert.equal(rectangle.diagonal(shape), 22.36);
  });

  it('knows if rectangle is a square', () => {
    var square = {width: 10, height: 10};
    var notSquare = {width: 10, height: 100};

    assert.isTrue(rectangle.isSquare(square));
    assert.isFalse(rectangle.isSquare(notSquare));
  })
});
