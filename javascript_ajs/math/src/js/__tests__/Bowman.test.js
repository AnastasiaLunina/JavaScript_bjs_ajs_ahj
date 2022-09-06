// jshint esversion:6
import Bowman from '../Bowman';

test('checking the creating of an instance Bowman', () => {
  expect(new Bowman('IronMan', 'Bowman', 25, 25, 100, 1)).toEqual({
    name: 'IronMan',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  });
});
