function Pet(name) {
  this.name = name;
  this.age = 0;
}

Pet.prototype.grow = function () {
  this.age += 1;
}

module.exports = { Pet };
