const assert = require('chai').assert
const avg = require('../js/average.js')
const total = avg.total
const mean = avg.mean
const median = avg.median
const mode = avg.mode


describe('average', function() {
    it('gets total', function(){

      assert.equal(total([1,2,3,4,5,6,7]), 28)
      assert.equal(total([10,32,23,4,5,6,7]), 87)
      
    })
    it('gets mean', function(){
        
        assert.equal(mean([1,2,3,4,5,6,7]), 4)
        assert.equal(mean([10,30,50,70]), 40)
        
    })
    it('gets median', function(){
        assert.equal(median([1,2,3,4,5,6]), 4.5)
        assert.equal(median([10,30,50,70,34]), 50)
    })
    it('gets mode', function(){
        assert.equal(mode([1,4,4,5,6]), 4)
        assert.equal(mode([1,1,1,1,1,4,4,5,6]), 1)
        
    })
})