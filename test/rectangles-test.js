const assert = require('chai').assert;
const rectangle = require('../rectangles.js');

it('can find the area of a rectangle', () => {
  const newRectangle = new rectangle(10, 20);
  assert.deepEqual(newRectangle.area(), 200);
});

it('can find the perimeter of a rectangle', () => {
  const newRectangle = new rectangle(10, 20);
  assert.deepEqual(newRectangle.perimeter(), 60);
});

it('can find the diagonal of a rectangle', () => {
  const newRectangle = new rectangle(10, 20);
  assert.deepEqual(newRectangle.diagonal(), 22.360679774997898);
})

it('can find if a rectangle is not a square', () => {
  const newRectangle = new rectangle(10, 20);
  assert.isFalse(newRectangle.isSquare());
})

it('can find if a rectangle IS a square', () => {
  const newRectangle = new rectangle(20, 20);
  assert.isTrue(newRectangle.isSquare());
})
