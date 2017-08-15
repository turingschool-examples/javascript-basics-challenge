var assert = require('chai').assert;
var factorial = require('../factorial.js')

describe('find factorials', function() {
  it('can find the factorial of a positive number', function() {
    var finding = new factorial;
    assert.equal(finding.response(4), 24);
  })

  it('return an error for a number <= 0', function() {
    var finding = new factorial;
    assert.equal(finding.response(-2), "I can only factorialize positive numbers. Please try again.");
  })

  it('returns an error for non-numbers', function() {
    var finding = new factorial;
    assert.equal(finding.response("I am not a number"), "Wrong.");
  })
})
