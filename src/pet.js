function Pet(name) {
  this.name = name;
  this.age = 0;
  this.fitness = 10;
  this.hunger = 0;
}

Pet.prototype.grow = function () {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
}

module.exports = { Pet };
