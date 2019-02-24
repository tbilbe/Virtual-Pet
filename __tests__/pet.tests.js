const { Pet } = require('../src/pet.js');

it('returns an objct', () => {
  expect(new Pet('Fido')).toBeInstanceOf(Object);
})

it('Should create a new Pet with a name when called', () => {
  const cat = new Pet('Oscar');
  expect(cat.name).toBe('Oscar');
});

describe('Growing up!', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Logan');
  })
  it('grow method should increase age by one', () => {
    pet.grow();
    expect(pet.age).toBe(1);
  })
});
describe('Gettting older and Unhealthy!', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Logan');
  });
  it('grow method should increase hunger by 5', () => {
    expect(pet.hunger).toBe(0);
    pet.grow();
    expect(pet.hunger).toBe(5);
    pet.grow();
    expect(pet.hunger).toBe(10);
  });
  it('grow method should decrease fitness by 3', () => {
    expect(pet.fitness).toBe(10);
    pet.grow();
    expect(pet.fitness).toBe(7);
    pet.grow();
    expect(pet.fitness).toBe(4);
    pet.grow();
  });
});
describe('Keeping Fit', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Logan');
    pet.grow();
    pet.grow();
  });
  it('should increase the fitness by 4', () => {
    expect(pet.fitness).toBe(4);
    pet.walk()
    expect(pet.fitness).toBe(8)
  });
  it('should not exceed fitness property by 10', () => {
    expect(pet.fitness).toBe(4);
    pet.walk();
    pet.walk();
    pet.walk();
    expect(pet.fitness).toBe(10);
  });
});

describe('don\'t let me starve!', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Logan');
  });
  it('hunger level goes down everytime we feed', () => {
    expect(pet.hunger).toBe(0);
    pet.grow(); // cause the pet to need food!
    expect(pet.hunger).toBe(5);
    pet.feed(); // decrease hunger -> by 3
    expect(pet.hunger).toBe(2);
  });

  describe('Pets hunger can\'t go below zero', () => {
    let pet;
    beforeEach(() => {
      pet = new Pet('Logan');
    });
    it('can\'t go below zero', () => {
      pet.grow();
      pet.grow();
      pet.feed();
      pet.feed();
      pet.feed();
      pet.feed();
      expect(pet.hunger).toBe(0)
    })
  })
});