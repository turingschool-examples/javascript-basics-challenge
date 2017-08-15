let shape = require('../lib/shapes')

describe('Triangle', function(){
  it('Is a Triangle', function(){
    let triangle = new shape.Triangle(1,2,3)

    assert.equal(1, triangle.a)
    assert.equal(2, triangle.b)
    assert.equal(3, triangle.c)
  })

  it('Verifies false triangle if all 0', function(){
    let triangle = new shape.Triangle(0, 0, 0)

    assert.isFalse(triangle.isTriangle())
  });

  it('Verifies false triangle if negitive sides', function(){
    let triangle = new shape.Triangle(-2, 1, 5)

    assert.isFalse(triangle.isTriangle())
  });

  it('Verifies false triangle', function(){
    let triangle = new shape.Triangle(4, 8, 50)

    assert.isFalse(triangle.isTriangle())
  });

  it('Verifies equilateral triangle', function(){
    let triangle = new shape.Triangle(4, 4, 4)

    assert.isTrue(triangle.isTriangle())
  });

  it('Verifies right triangle', function(){
    let triangle1 = new shape.Triangle(6, 8, 10)
    let triangle2 = new shape.Triangle(6, 10, 8)
    let triangle3 = new shape.Triangle(8, 6, 10)
    let triangle4 = new shape.Triangle(8, 10, 6)
    let triangle5 = new shape.Triangle(10, 8, 6)
    let triangle6 = new shape.Triangle(10, 6, 8)

    assert.isTrue(triangle1.isTriangle())
    assert.isTrue(triangle2.isTriangle())
    assert.isTrue(triangle3.isTriangle())
    assert.isTrue(triangle4.isTriangle())
    assert.isTrue(triangle5.isTriangle())
    assert.isTrue(triangle6.isTriangle())
  });
})