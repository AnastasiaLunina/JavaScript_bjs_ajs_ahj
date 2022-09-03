// jshint esversion:6
import Swordsman from '../Swordsman';

test('checking the creating of an instance Swordsman', () => {
  expect(new Swordsman('Wolverine', 'Swordsman', 10, 40, 100, 1)).toEqual({
    name: 'Wolverine',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  });
});
