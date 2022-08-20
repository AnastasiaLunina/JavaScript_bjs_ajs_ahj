// jshint esversion:6
import Daemon from '../Daemon';

test('checking the creating of an instance Daemon', () => {
  expect(new Daemon('Thor', 'Daemon', 10, 40, 100, 1)).toEqual({
    name: 'Thor',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  });
});
