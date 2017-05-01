const triangles = require('../lib/triangles')
const expect = require('chai').expect
var pry = require('pryjs');

describe('triangle function', function(){
  it('#returns false if given numbers are equal to zero', function(){
    expect(triangles.isTriangle(0, 1, 0)).to.be.false
  })
  it('#returns false if given numbers are negative', function(){
    expect(triangles.isTriangle(5, -7, -9)).to.be.false
  })
  it('#returns true if all sides are equal', function(){
    expect(triangles.isTriangle(4, 4, 4)).to.be.true
  })
  it('#returns true if its a right triangle', function(){
    expect(triangles.isTriangle(6, 8, 10)).to.be.true
    expect(triangles.isTriangle(10, 8, 6)).to.be.true
    expect(triangles.isTriangle(8, 6, 10)).to.be.true
  })
  it('#returns true if its an isoceles triangle', function(){
    expect(triangles.isTriangle(6, 6, 10)).to.be.true
    expect(triangles.isTriangle(10, 8, 8)).to.be.true
    expect(triangles.isTriangle(10, 6, 10)).to.be.true
  })
})
