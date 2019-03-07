function Pet(name) {
  this.name = name;
  this.age = 0;
  this._fitnessLimiter = 7;
  this.fitness = 10;
  this.hunger = 0;
}
/*
getter methods before other methods
this is because you set on empty object
*/

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
};

Pet.prototype.adoption = function (childObj) {
  return this.children = [childObj];
};

Pet.prototype.growUp = function growUp() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function walk() {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  if (this.fitness > this._fitnessLimiter) {
    this.fitness = 10;
  } else {
    this.fitness += 4;
  }
};
Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw 'Your pet is no longer alive :(';
  }
  if (this.hunger < 3) {
    return this.hunger = 0;
  }
  return this.hunger -= 3;
};
Pet.prototype.checkUp = function checkUp() {
  // need to return string
  if (!this.isAlive) {
    return 'Your pet is no longer alive :(';
  }
  if (this.hunger >= 5 && this.fitness <= 3) {
    return 'I am hungry AND I need a walk';
  }
  if (this.hunger >= 5) {
    return 'I am hungry';
  }
  if (this.fitness <= 3) {
    return 'I need a walk;';
  }
  return 'I feel great!';
};
module.exports = { Pet };
