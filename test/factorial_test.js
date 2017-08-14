const assert = require("chai").assert
const factorial = require('../factorial')

const pry = require('pryjs')

it("can do the thing", function() {
    assert.equal(factorial(0), 0)
})

it("can do the thing", function() {
    assert.equal(factorial(1), 1)
})

it("can do the thing", function() {
    assert.equal(factorial(4), 24)
})

it("can do the thing", function() {
    assert.equal(factorial(10), 3628800)
})