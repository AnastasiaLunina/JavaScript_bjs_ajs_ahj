// jshint esversion:6
import Magician from '../Magician';

test('checking the creating of an instance Magician', () => {
  expect(new Magician('Hulk', 'Magician', 10, 40, 100, 1)).toEqual({
    name: 'Hulk',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  });
});
