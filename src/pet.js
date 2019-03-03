function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}

Pet.prototype.growUp = function () {
  const oneYearOlder = 1;
  const tummyRumbles = 5;
  const unhealthy = 3;
  this.age += oneYearOlder;
  this.hunger += tummyRumbles;
  this.fitness -= unhealthy;
}

module.exports = {
  Pet
}