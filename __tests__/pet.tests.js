const { Pet } = require('../src/pet.js');

it('returns an objct', () => {
  expect(new Pet('Fido')).toBeInstanceOf(Object);
})


it('Should create a new Pet with a name when called', () => {
  const cat = new Pet('Oscar')
  expect(cat.name).toBe('Oscar');
  // expect(Pet('Fido')).toBe('Fido');
});
