/*jshint esversion: 6 */

const assert = require('chai').assert;
const area = require('../rectangles').area;
const perimeter = require('../rectangles').perimeter; 
const diagonal = require('../rectangles').diagonal; 
const isSquare = require('../rectangles').isSquare;

describe('Rectangles! Wooooooo!!!', function() {
  var w = 10;
  var h = 20;
  var rectangle = {width: w, height: h};

  it('can caluculate the area of a dang rectangle', function() {
    assert.equal(area(rectangle), 200);
  });

  it('can caluculate the perimeter of a dang rectangle', function() {
    assert.equal(perimeter(rectangle), 60);
  });

  it('can caluculate the diagonal of a dang rectangle', function() {
    assert.equal(diagonal(rectangle), Math.sqrt(500));
  });

  it('can determine if the dang rectangle is in fact lying to you, and is a square living a lie', function() {
    var w = 10;
    var h = 10;
    var rectangle = {width: w, height: h};

    assert(isSquare(rectangle));
  });

  it('can determine if the dang rectangle is not a dang square', function() {
    assert(isSquare(rectangle) !== true);
  });
});
