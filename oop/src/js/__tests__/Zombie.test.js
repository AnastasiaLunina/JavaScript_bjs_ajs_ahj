// jshint esversion:6
import Zombie from '../Zombie';

test('checking the creating of an instance Zombie', () => {
  expect(new Zombie('Superman', 'Zombie', 10, 40, 100, 1)).toEqual({
    name: 'Superman',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  });
});
