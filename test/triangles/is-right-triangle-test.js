const assert = require('chai').assert
const isRightTriangle = require('../../lib/triangles/is-triangle.js')

describe('isRightTriangle functionality', function() {
  context('isRightTriangle function', function(){
    it('it can determine if 3 sides could exist in a right triangle', function(){
      let sideOne = 6;
      let sideTwo = 8;
      let sideThree = 10;

      let answer = isRightTriangle(sideOne, sideTwo, sideThree);
      assert.equal(answer, true)

      answer = isRightTriangle(sideTwo, sideOne, sideThree);
      assert.equal(answer, true)

      answer = isRightTriangle(sideThree, sideOne, sideTwo);
      assert.equal(answer, true)

      answer = isRightTriangle(sideOne, sideThree, sideTwo);
      assert.equal(answer, true)

      answer = isRightTriangle(sideTwo, sideThree, sideOne);
      assert.equal(answer, true)

      answer = isRightTriangle(sideThree, sideTwo, sideOne);
      assert.equal(answer, true)

      sideOne   = 0;
      sideTwo   = 8;
      sideThree = 10;
      answer = isRightTriangle(sideOne, sideTwo, sideThree);
      assert.equal(answer, false)

      sideOne   = 6;
      sideTwo   = 0;
      sideThree = 10;
      answer = isRightTriangle(sideOne, sideTwo, sideThree);
      assert.equal(answer, false)

      sideOne   = 6;
      sideTwo   = 8;
      sideThree = 0;
      answer = isRightTriangle(sideOne, sideTwo, sideThree);
      assert.equal(answer, false)

      sideOne   = -6;
      sideTwo   = 8;
      sideThree = 10;
      answer = isRightTriangle(sideOne, sideTwo, sideThree);
      assert.equal(answer, false)

      sideOne   = 6;
      sideTwo   = -8;
      sideThree = 10;
      answer = isRightTriangle(sideOne, sideTwo, sideThree);
      assert.equal(answer, false)

      sideOne   = 6;
      sideTwo   = 8;
      sideThree = -10;
      answer = isRightTriangle(sideOne, sideTwo, sideThree);
      assert.equal(answer, false)
    })
  })
})
