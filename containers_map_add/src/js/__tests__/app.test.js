// jshint esversion:6
import Settings from '../app';

test('Positive. Method settings() should contain user settings.', () => {
  const newSettings = new Settings();
  const recieved = newSettings.userSettings;
  const expected = new Map([
    ['theme', 'light'],
    ['music', 'chillout'],
    ['difficulty', 'easy'],
  ]);

  expect(recieved).toEqual(expected);
});

test('Negative. Method settings() should not contain default settings', () => {
  const newSettings = new Settings();
  const recieved = newSettings.userSettings;
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'trans'],
    ['difficulty', 'easy'],
  ]);

  expect(recieved).not.toEqual(expected);
});
