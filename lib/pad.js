Array.prototype.pad = function (number, element) {
  for(var i = this.length; i < number; i++) {
    this.push(element);
  };
  return this;
};

module.exports = Array.prototype.pad;
