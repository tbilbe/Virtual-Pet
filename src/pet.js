function Pet(name) {
  this.name = name;
  this.age = 0;
  this._fitnessLimiter = 7;
  this.fitness = 10;
  this.hunger = 0;
}

Pet.prototype.grow = function () {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
}

Pet.prototype.walk = function () {
  if (this.fitness > this._fitnessLimiter) {
    return this.fitness = 10;
  }
  this.fitness += 4;
}

module.exports = { Pet };
