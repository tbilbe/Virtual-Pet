const MAX_FITNESS = 7;
const MIN_FITNESS = 0;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this._fitnessLimiter = 7; // this can be a module level constant
  this.fitness = 10;
  this.hunger = 0;
}
/*
getter methods before other methods
this is because you set on empty object
*/

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > MIN_FITNESS; // what are these magic numbers of 30, 10 and 0?
  }
}

Pet.prototype.adoption = function (childObj) {
  return this.children = [childObj] // you can only adopt one child?
}

Pet.prototype.growUp = function () {
  if (!this.isAlive) { // space things out, use new lines...
    throw new Error("Your pet is no longer alive :(") 
  }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
}

Pet.prototype.walk = function () {
  if (!this.isAlive) { throw new Error("Your pet is no longer alive :(") }
  if (this.fitness > this._fitnessLimiter) { 
    return this.fitness = 10;
  }
  this.fitness += 4;
}
Pet.prototype.feed = function () {
  if (!this.isAlive) { throw "Your pet is no longer alive :(" }
  if (this.hunger < 3) { return this.hunger = 0 } else { // quite unorthodox indentation here, install eslint
    return this.hunger -= 3;
  }
}

Pet.prototype.checkUp = function () {
  // need to return string
  if (!this.isAlive) { return "Your pet is no longer alive :(" }
  if (this.hunger >= 5 && this.fitness <= 3) { // again magic numbers...
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
