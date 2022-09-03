// jshint esversion:6
import Magician from '../Magician';

test('checking the creating of an instance Magician', () => {
  expect(new Magician('Hulk', 'Magician', 10, 40, 100, 1)).toEqual({
    defence: 40,
    distance: 1,
    health: 100,
    level: 1,
    name: 'Hulk',
    setAttack: 10,
    type: 'Magician',
  });
});

test('Magician attacks regular', () => {
  const character = new Magician('Hulk', 'Magician', 10, 40, 100, 1);
  character.attack = 100;
  expect(character.attack).toBe(100);
});

test('Magician attacks with distance of 4 squares', () => {
  const character = new Magician('Hulk', 'Magician', 10, 40, 100, 1);
  character.attack = 100;
  character.distance = 3;
  expect(character.attack).toBe(80);
});

test('Magician attacks while stoned is true and distance is 3', () => {
  const character = new Magician('Hulk', 'Magician', 10, 40, 100, 1);
  character.attack = 100;
  character.distance = 3;
  character.stoned = true;
  expect(character.attack).toBe(72);
});

test('Magician attacks < 0', () => {
  const character = new Magician('Hulk', 'Magician', 10, 40, 100, 1);
  character.attack = 1;
  character.distance = 5;
  character.stoned = true;
  expect(character.attack).toBe(0);
});

test('Magician stoned', () => {
  const character = new Magician('Hulk', 'Magician', 10, 40, 100, 1);
  character.stoned = true;
  expect(character.stoned).toBe(true);
});
