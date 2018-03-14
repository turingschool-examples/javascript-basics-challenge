const assert = require('chai').assert
const timesTable = require('../js/timesTable.js')


describe('timesTable', function() {

    it('makes a timeTable', function(){
      assert.equal(timesTable(3).length, 3 )
    })
})
