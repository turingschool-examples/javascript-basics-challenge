const assert = require('chai').assert;
const area = require('./basicsChallenge.js');
var rectangle = {width: 10, height: 20};


it("can assert correct", function(){
  assert.equal(area(rectangle), 200);
});
