const assert = require('chai').assert
const averageFunctions = require("../averages")



describe('averages', function(){
  context('is able to perform math on numbers in an array', function (){
    var array = [1, 2, 3, 4, 3, 3, 1];
    var arrayTwo = [1, 2, 3, 4, 3, 11];
    var arrayThree = [1, 2, 3, 4, 3, 2];
    it('finds the total', function(){
      averageFunctions.total(array);
      assert.equal(averageFunctions.total(array), 17)
    })
    it('finds the mean', function(){
      averageFunctions.mean(array);
      assert.equal(averageFunctions.mean(array), 2.4)
    })
    it('finds the median', function(){
      averageFunctions.median(array);
      averageFunctions.median(arrayTwo);
      assert.equal(averageFunctions.median(array), 3);
      assert.equal(averageFunctions.median(arrayTwo), 3)
    })

    it('finds the mode and returns an object', function(){
      averageFunctions.mode(array);
      averageFunctions.mode(arrayTwo);
      assert.deepEqual(averageFunctions.mode(array), { '3': 3 });
      assert.deepEqual(averageFunctions.mode(arrayThree), { '3': 2, '2': 2 })
    })


  })
})
