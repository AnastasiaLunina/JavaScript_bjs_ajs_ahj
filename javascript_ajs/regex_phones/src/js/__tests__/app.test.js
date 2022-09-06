// jshint esversion:6
import validator from '../app';

test('Checking format starting with 8', () => {
  const truthyInstance = validator('8 (927) 000-00-00');
  expect(truthyInstance).toBe('+79270000000');
});

test('Checking format starting with +7', () => {
  const truthyInstance = validator('+7 960 000 00 00');
  expect(truthyInstance).toBe('+79600000000');
});

test('Checking format starting with +86', () => {
  const truthyInstance = validator('+86 000 000 0000');
  expect(truthyInstance).toBe('+860000000000');
});
