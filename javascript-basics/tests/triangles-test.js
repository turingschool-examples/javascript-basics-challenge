var pry = require('pryjs');
const expect = require('chai').expect
const assert = require('assert').assert
const triangles = require('../scripts/triangles')

describe('Triangle functions', function() {
  it('returns true for valid triangles', function() {
    expect(triangles.isTriangle(3, 4, 5)).to.be.true
    expect(triangles.isTriangle(5, 4, 3)).to.be.true
    expect(triangles.isTriangle(4, 3, 5)).to.be.true
    expect(triangles.isTriangle(0, 1, 2)).to.be.false
    expect(triangles.isTriangle(-10, 6, 3)).to.be.false
  })
})