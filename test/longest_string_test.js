const assert = require("chai").assert
const longestString = require('../longest_string')

const pry = require('pryjs')

it("can do the thing", function() {
    let collection = ['pineapples', 'horses',
        'cats', "rhinos"
    ]
    assert.equal(longestString(collection), "pineapples")
})


it("can do the thing", function() {
    let collection = ['one', 'two',
        'three', "four", "five", "six", "seventeen"
    ]
    assert.equal(longestString(collection), "seventeen")
})


it("can do the thing", function() {
    let collection = ['one', 'two']
    assert.equal(longestString(collection), "one")
})