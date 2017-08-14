const assert = require('chai').assert;
const isTriangle = require('../triangle').isTriangle

describe("isTriangle", function(){
  it("returns true if the three numbers form an equilateral triangle", function(){
    var expected = true;
    var actual = isTriangle(4, 4, 4);
    assert.equal(expected, actual);
  });

  it("returns true if the three numbers could form the side lengths", function(){
    var expected = true;
    var actual = isTriangle(6, 8, 10);
    assert.equal(expected, actual);
  });

  it("returns false if any of the numbers are negative", function(){
    var expected = false;
    var actual = isTriangle(-2, 1, 5);
    assert.equal(expected, actual);
  });

  it("returns false if any of the numbers are zero", function(){
    var expected = false;
    var actual = isTriangle(0, 0, 0);
    assert.equal(expected, actual);
  });

  it("returns false if the numbers cannot form the sides of a triangle", function(){
    var expected = false;
    var actual = isTriangle(4, 8, 50);
    assert.equal(expected, actual);
  });
});



// isTriangle(0,0,0) # => false, because a triangle can't have 0 length sides
// isTriangle(-2,1,5) # => false, because a triangle can't have negative length sides

// isTriangle(4,4,4) # => true, an equilateral triangle

// isTriangle(6,8,10) # => true, a right triangle
// isTriangle(8,6,10) # => true, the same right triangle
// isTriangle(10,8,6) # => true, the same right triangle

// isTriangle(4, 8, 50) #=> false, no such triangle exists