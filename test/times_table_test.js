const assert = require("chai").assert
const timesTable = require('../times_table')

const pry = require('pryjs')

it("can do the thing", function() {
    let expected = "1 2 3 \n2 4 6 \n3 6 9 \n"
    assert.equal(timesTable(3), expected)
})

it("can do the thing", function() {
    let expected = '1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n'
    assert.equal(timesTable(5), expected)
})