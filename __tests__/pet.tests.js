const { Pet } = require('../src/pet.js');

it('returns an objct', () => {
  expect(new Pet('Fido')).toBeInstanceOf(Object);
})


it('Should create a new Pet with a name when called', () => {
  const cat = new Pet('Oscar');
  expect(cat.name).toBe('Oscar');
});

describe('Growing up!', () => {
  const pet = new Pet('Logan');

  beforeAll(() => {
    // Pet should have initial age of 0
    // initialise the test - beforeEvery and reset the pet to 0
    expect(pet.name).toBe('Logan');
    expect(pet.age).toBe(0);
  })

  it('increase age by one', () => {
    pet.grow();
    expect(pet.age).toBe(1);
  })

  // grow up method should increase age by 1;

})
