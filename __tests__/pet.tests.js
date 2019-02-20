const { Pet } = require('../src/pet.js');

it('Should create a new Pet with a name when called', () => {
  expect(Pet('Fido')).toBe('Fido');
});
