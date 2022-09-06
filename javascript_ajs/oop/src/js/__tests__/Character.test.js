// jshint esversion:6
import Character from '../Character';

test('checking the creating of an instance', () => {
  expect(new Character('SpiderMan', 'Magician', 100, 1)).toEqual({
    name: 'SpiderMan',
    type: 'Magician',
    // attack: 10,
    // defence: 10,
    health: 100,
    level: 1,
  });
});

test('throwing an error in case of non string value entered', () => {
  expect(() => new Character(123456, 'Magician', 100, 1)).toThrow();
});

test('throwing an error in case of name is shorter than 2 characters', () => {
  expect(() => new Character('A', 'Magician', 100, 1)).toThrow();
});

test('throwing an error in case of name is longer than 10 characters', () => {
  expect(() => new Character('SuperSpiderMan', 'Magician', 100, 1)).toThrow();
});

test('throwing an error in case of non existed character type entered', () => {
  expect(() => new Character('SpiderMan', 'Spider', 100, 1)).toThrow();
});

test('checking levelUp method', () => {
  const magician = new Character('SpiderMan', 'Magician', 10, 1);
  magician.attack = 10;
  magician.defence = 10;
  magician.levelUp();
  expect(magician).toEqual({
    name: 'SpiderMan',
    type: 'Magician',
    health: 100,
    attack: 12,
    defence: 12,
    level: 1,
  });
});

test('throwing an error in case of health = 0 in levelUp method', () => {
  const magician = new Character('SpiderMan', 'Magician', 0, 1);
  expect(() => magician.levelUp()).toThrow();
});

test('checking damage method ', () => {
  const magician = new Character('SpiderMan', 'Magician', 100, 1);
  magician.attack = 10;
  magician.defence = 10;
  magician.damage(20);
  expect(magician.health).toBe(82);
});

test('throwing an error in case of health < 0 in damage method', () => {
  const magician = new Character('SpiderMan', 'Magician', -1, 1);
  expect(() => magician.damage(20)).toThrow();
});
