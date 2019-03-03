const { Pet } = require('../src/pet.js');

describe('create a new instance of a pet', () => {
  test('new pet object creation', () => {
    expect(new Pet('Oscar')).toEqual({ name: 'Oscar', age: 0, hunger: 0, fitness: 10 });
    expect(new Pet('Logan')).toEqual({ name: 'Logan', age: 0, hunger: 0, fitness: 10 });
  });
});

describe('Aging - being born and getting older', () => {
  let kitty;
  beforeAll(() => {
    kitty = new Pet('Oscar');
  });
  test('How old are you when you\'re born?', () => {
    expect(kitty.age).toBe(0);
  });
  test('What happens when you grow? - you get older!', () => {
    kitty.growUp();
    expect(kitty.age).toBe(1);
  });
});

describe('Getting older and unhealthier!', () => {
  let kitty;
  beforeAll(() => {
    kitty = new Pet('Oscar');
  });
  test('I am born but I am not hungry...', () => {
    expect(kitty.hunger).toBe(0);
    expect(kitty.fitness).toBe(10);
  });
  test('We get hungry when we grow', () => {
    kitty.growUp();
    expect(kitty.hunger).toBe(5);
  });
  test('We get unfit when we grow', () => {
    kitty.growUp();
    expect(kitty.fitness).toBe(4);
  });
})