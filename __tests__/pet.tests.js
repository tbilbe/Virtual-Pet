const { Pet } = require('../src/pet.js');
it('returns an objct', () => {
  expect(new Pet('Fido')).toBeInstanceOf(Object);
})
it('Should create a new Pet with a name when called', () => {
  const cat = new Pet('Oscar');
  expect(cat.name).toBe('Oscar');
});

// don't commit skipped tests, tests are only valuable if they are actually run.
xdescribe('Growing up!', () => { 
  let pet; // nice use of scope and beforeEach for setup purposes.
  beforeEach(() => {
    pet = new Pet('Logan');
  })
  it('growUp method should increase age by one', () => {
    pet.growUp();
    expect(pet.age).toBe(1);
  })
});
xdescribe('Gettting older and Unhealthy!', () => {
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
    pet.feed();
    expect(pet.fitness).toBe(7);
    pet.growUp();
    pet.feed();
    expect(pet.fitness).toBe(4);
    pet.growUp();
  });
});
xdescribe('Keeping Fit', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Logan');
    pet.growUp();
    pet.feed();
    pet.growUp();
  });
  it('should increase the fitness by 4', () => {
    expect(pet.fitness).toBe(4);
    pet.walk();
    expect(pet.fitness).toBe(8);
  });
  it('should not exceed fitness property by 10', () => {
    expect(pet.fitness).toBe(4);
    pet.walk();
    pet.walk();
    pet.walk();
    expect(pet.fitness).toBe(10);
  });
});

xdescribe('don\'t let me starve!', () => {
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

  // use backticks for strings if you need to use a ', then you don't need to escape...
  xdescribe('Pets hunger can\'t go below zero', () => {
    let pet;
    beforeEach(() => {
      pet = new Pet('Logan');
    });
    it(`can't go below zero`, () => {
      pet.growUp();
      pet.feed();
      pet.growUp();
      pet.feed();
      pet.feed();
      pet.feed();
      pet.feed();
      expect(pet.hunger).toBe(0)
    })
  })

});


xdescribe(`Check-Up! - How are you feeling?`, () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Logan');
  });
  xit(`checks levels of the pet.`, () => {
    pet.growUp();
    expect(pet.checkUp()).toEqual('I am hungry');
    pet.growUp();
    expect(pet.checkUp()).toEqual('I am hungry');
    pet.growUp();
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
  });
  it(`checks if the pet is ok!`, () => {
    expect(pet.checkUp()).toEqual('I feel great!');
  })
});

xdescribe(`Are you alive! - 'getter'`, () => {
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
  xit(`if we grow too old we die`, () => {
    // oh boy, what is this wall of code...
    // why dont you just put these 3 methods 
    // in a for loop
    const MAX_AGE = 30;
    for(let i = 0; i < MAX_AGE; i++) {
          pet.growUp(); 
          pet.feed(); 
          pet.walk();
    } 

    expect(pet.isAlive).toBe(false)
  });

});

xdescribe('Guarding - Error checks', () => {
  let pet;
  beforeEach(() => {
    pet = new Pet('Oscar');
    pet.hunger = 10;
    pet.fitness = 0;
    pet.age = 30;
  });
  test('dead pet -> checkUp() should return :x !', () => {
    expect(pet.checkUp()).toBe('Your pet is no longer alive :(')
  });
  test('dead pet -> walk() shouldn\'t work', () => {
    expect(pet.walk).toThrow(`Your pet is no longer alive :(`);
  });
  test('dead pet -> feed() shouldn\'t work', () => {
    expect(pet.feed).toThrow(`Your pet is no longer alive :(`)
  });
  test('dead pet -> growUp() shouldn\'t work', () => {
    expect(pet.growUp).toThrow(`Your pet is no longer alive :(`)
  });
});

describe('Children->?!', () => {
  let baby, pet;
  beforeEach(() => {
    pet = new Pet('Oscar');
    baby = new Pet('Lulu')
  });
  test('can you adopt :)', () => {
    expect(baby.name).toBe('Lulu')
    pet.adoption(baby);
    expect(pet.children).toContain(baby);
    expect(pet.children[0].name).toBe('Lulu');
  });
});
