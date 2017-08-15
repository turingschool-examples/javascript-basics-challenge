const shape = require('../lib/shapes');

console.log(shape)

describe('Rectangle', function(){
  it('Is a Rectangle Object', function(){
    var rectangle = new shape.Rectangle(2, 4);

    assert.equal(2, rectangle.width);
    assert.equal(4, rectangle.height);
  });

  it('Calculates Area', function(){
    rectangle = new shape.Rectangle(2, 4);

    assert.equal(8, rectangle.area())
  });

  it('Calculates Perimeter', function(){
    rectangle = new shape.Rectangle(2, 4);
    assert.equal(12, rectangle.perimeter())
  });

  it('Calculates Diagonal', function(){
    rectangle = new shape.Rectangle(3, 4);
    assert.equal(5, rectangle.diagonal())
  });

  it('Knows if Square or not', function(){
    rectangle = new shape.Rectangle(3, 4);
    square = new shape.Rectangle(4, 4);
    assert.isFalse(rectangle.isSquare());
    assert.isTrue(square.isSquare());
  });
});