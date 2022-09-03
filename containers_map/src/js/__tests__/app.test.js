// jshint esversion:6
import ErrorRepository from '../app';

test('Valid error code added returns error code value', () => {
  const errorsRepo = new ErrorRepository();

  expect(errorsRepo.translate(200)).toBe('Status OK');
});

test('Invalid error code added returns string "Unknown error"', () => {
  const errorsRepo = new ErrorRepository();

  expect(errorsRepo.translate(500)).toBe('Unknown error');
});
