assert = require('chai').assert;
const myFunctions = require('../lib/timesTable')
describe("it takes an input and represents number of rows", function(){

  it("returns the time table", function(){
    expected =
    ('\n1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n')

    assert.strictEqual(myFunctions.timesTable(5), expected)
  })

  it("returns the time table", function(){
    expected =
    ('\n1 2 3 \n2 4 6 \n3 6 9 \n')

    assert.strictEqual(myFunctions.timesTable(3), expected)
  })
})
