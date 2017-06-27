const assert = require('chai').assert
const timesTable = require("../times-table")



describe('timesTable', function(){
  context('creates a multiplication table given a number', function (){
    it('it returns a string representing a times table with the number of rows given', function(){

      assert.equal(timesTable(5), '1 2 3 4 5\n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n')
    })
  })
})
