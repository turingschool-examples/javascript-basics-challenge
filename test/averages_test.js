const assert = require("chai").assert
const Operations = require('../averages')

const pry = require('pryjs')

it("can operate", function() {
    let collection = [1, 2, 3, 4, 5]
    let operator = new Operations(collection)
    assert.equal(operator.total, 15)
    assert.equal(operator.mean, 3)
    assert.equal(operator.median, 3)
})
it("can median with even array", function() {
    let collection = [1, 2, 3, 4, 5, 6]
    let operator = new Operations(collection)
    assert.equal(operator.mean, 3.5)
})

it("can median with even array", function() {
    let collection = [1, 2, 3, 4, 5]
    let operator = new Operations(collection)
    assert.equal(operator.mode, 'none')

    let collection_2 = [1, 2, 2, 4, 5]
    let operator_2 = new Operations(collection_2)
    assert.deepEqual(operator_2.mode, { '2': 2 })

    let collection_3 = [1, 2, 2, 4, 4, 4, 5]
    let operator_3 = new Operations(collection_3)
    assert.deepEqual(operator_3.mode, { '4': 3 })
})