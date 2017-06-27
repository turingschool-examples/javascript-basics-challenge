const assert = require('chai').assert;
const count = require('../count_between');
describe("It can take an array and two arguments", function(){
  it(' and count elements between the two args', function(){
    assert.equal(count([25,2,8], 0, 100), 3);
    assert.equal(count([-19,2,8], 0, 100), 2);
    assert.equal(count([100,200,300], 100, 300), 3);
    assert.equal(count([], -10, 10), 0);
    assert.equal(count([5], 5, 5), 1);
  });
});
