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
  it('growUp method should increase age by one', () => {
    pet.growUp();
    expect(pet.age).toBe(1);
  })
});
describe('Gettting older and Unhealthy!', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Logan');
  });
  it('growUp method should increase hunger by 5', () => {
    expect(pet.hunger).toBe(0);
    pet.growUp();
    expect(pet.hunger).toBe(5);
    pet.growUp();
    expect(pet.hunger).toBe(10);
  });
  it('growUp method should decrease fitness by 3', () => {
    expect(pet.fitness).toBe(10);
    pet.growUp();
    expect(pet.fitness).toBe(7);
    pet.growUp();
    expect(pet.fitness).toBe(4);
    pet.growUp();
  });
});
describe('Keeping Fit', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Logan');
    pet.growUp();
    pet.growUp();
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
    pet.growUp(); // cause the pet to need food!
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
      pet.growUp();
      pet.growUp();
      pet.feed();
      pet.feed();
      pet.feed();
      pet.feed();
      expect(pet.hunger).toBe(0)
    })
  })

});

describe(`Check-Up! - How are you feeling?`, () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Logan');
  });
  it(`checks levels of the pet.`, () => {
    pet.growUp();
    expect(pet.check()).toEqual('I am hungry');
    pet.growUp();
    expect(pet.check()).toEqual('I am hungry');
    pet.growUp();
    expect(pet.check()).toEqual('I am hungry AND I need a walk');
  });
  it(`checks if the pet is ok!`, () => {
    expect(pet.check()).toEqual('I feel great!');
  })
});

describe(`Are you alive! - 'getter'`, () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Logan');
  });
  it('isAlive is a property should be true if the pet is alive!', () => {
    expect(pet.isAlive).toBe(true);
  });

  it(`if we grow and don't feed we die`, () => {
    pet.growUp();
    pet.growUp();
    expect(pet.isAlive).toBe(false);
  });
  it(`if we grow and don't walk we die`, () => {
    pet.growUp();
    pet.feed();
    pet.growUp();
    pet.feed();
    pet.growUp();
    pet.feed();
    pet.growUp();
    expect(pet.isAlive).toBe(false);
  });
  it(`if we grow too old we die`, () => {
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    pet.growUp(); pet.feed(); pet.walk();
    expect(pet.isAlive).toBe(false)
  });

});