// jshint esversion:6
import fetchData from '../http';
import getLevel from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should return message with current level in case of success', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1000 });
  expect(getLevel(123)).toBe('Ваш текущий уровень: 1000');
});

test('should return error message', () => {
  fetchData.mockReturnValue({ status: 'errorr', level: 1000 });
  expect(getLevel(123)).toBe('Информация об уровне временно недоступна');
});
