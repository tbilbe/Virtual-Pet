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
Pet.prototype.feed = function () {
  if (this.hunger < 3) { return this.hunger = 0 } else {
    return this.hunger -= 3;
  }
}

Pet.prototype.check = function () {
  // need to return string
  if (this.hunger >= 5 && this.fitness <= 3) {
    return `I am hungry AND I need a walk`;
  } else if (this.hunger >= 5) {
    return `I am hungry`;
  } else if (this.fitness <= 3) {
    return `I need a walk;`
  } else {
    return `I feel great!`;
  }
}

module.exports = { Pet };
