// jshint esversion:6

import sortCaharcters from '../app';

test('should sort characters by health in desc order', () => {
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const received = sortCaharcters([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(received).toEqual(expected);
  expect(received).not.toBe(expected);
});
