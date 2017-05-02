const expect = require('expect');
const isTriangle = require('../lib/triangle').isTriangle;

describe('triangle', function() {
  it('returns true if it makes a triangle', function() {
    expect(isTriangle(3, 4, 5)).toBeTruthy;
  })
  it('returns false if nums are negative', function() {
    expect(isTriangle(-1, 4, 5)).toBeFalsey;
  })
  it('returns false if nums are bad', function() {
    expect(isTriangle(3, 4, 50)).tobeFalsey;
  })
  it('returns true for a right triangle', function() {
    expect(isTriangle(6, 8, 10)).toBeTruthy;
  })
})
