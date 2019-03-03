const { Pet } = require('../src/pet.js');

describe('create a new instance of a pet', () => {
  expect(new Pet('Oscar')).toEqual({ name: 'Oscar' });
  expect(new Pet('Logan')).toEqual({ name: 'Logan' })
})