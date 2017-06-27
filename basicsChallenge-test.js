const assert = require('chai').assert;
const area = require('./basicsChallenge.js');
var rectangle = {width: 10, height: 20};

// import {area} from 'basicsChallenge';

it("can assert correct", function(){
  assert.equal(area(rectangle), 200);
});
