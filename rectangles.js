var pry = require('pryjs');
// eval(pry.it);

function multiply(input_one, input_two) {
  return input_one * input_two;
};

function addition(input_one, input_two) {
  return input_one + input_two;
};

function area(attributes) {
  let width = attributes.width;
  let height = attributes.height;

  return multiply(width, height);
};

function perimeter(attributes) {
  let width = attributes.width;
  let height = attributes.height;

  return multiply((addition(width, height)), 2);
};

function diagonal(attributes) {
  let width = Math.pow(attributes.width, 2);
  let height = Math.pow(attributes.height, 2);

  return Math.sqrt(addition(width, height));
};

module.exports = {
  area,
  perimeter,
  diagonal
}
