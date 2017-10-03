
const assert = require('chai').assert;
const factorial = require('../factorials');

describe('factorial', function () {
    it('returns the factorial of a positive number', function () {
        assert.equal(factorial(5), 120)
    });

    it('return error message for negative numbers', function () {
       assert.equal(factorial(-5), 'No negative numbers allowed')
    });

    it('returns 1 for the number 0', function () {
        assert.equal(factorial(0), 1)
    })
});