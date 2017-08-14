const assert = require('chai').assert;
const rectangle = require('../lib/rectangle');

describe('Rectangle', function(){
  it('Is a Rectangle Object', function(){
    rectangle = new Rectangle(2, 4);
    assert.equal(rectangle.width, 2);
    assert.equal(rectangle.height, 4);
  });

  it('Calculates Area', function(){
    rectangle = new Rectangle(2, 4);
    assert.equal(rectangle.area, 8)
  });

  it('Calculates Perimeter', function(){
    rectangle = new Rectangle(2, 4);
    assert.equal(rectangle.perimeter, 12)
  })

  it('Calculates Diagonal', function(){
    rectangle = new Rectangle(3, 4);
    assert.equal(rectangle.diagonal, 5)
  });

  it('Knows if Square or not', function(){
    rectangle = new Rectangle(3, 4);
    square = new Rectangle(4, 4);
    assert.isFalse(rectangle.isSquare);
    assert.isTrue(rectangle.isSquare);
  });
}