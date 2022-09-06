// jshint esversion:6

import characterHealth from '../app';

test('health should be healthy', () => {
  const expected = 'healthy';
  const received = characterHealth({ name: 'Mag', health: 70 });
  expect(received).toBe(expected);
});

test('health should be wounded', () => {
  const expected = 'wounded';
  const received = characterHealth({ name: 'Mag', health: 40 });
  expect(received).toBe(expected);
});

test('health should be critical', () => {
  const expected = 'critical';
  const received = characterHealth({ name: 'Mag', health: 10 });
  expect(received).toBe(expected);
});
