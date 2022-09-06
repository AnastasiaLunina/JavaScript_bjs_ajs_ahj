// jshint esversion:6
import Undead from '../Undead';

test('checking the creating of an instance Undead', () => {
  expect(new Undead('Batman', 'Undead', 10, 40, 100, 1)).toEqual({
    name: 'Batman',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  });
});
