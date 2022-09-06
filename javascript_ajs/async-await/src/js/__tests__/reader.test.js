// jshint esversion:8
import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('works with async/await and rejects', async () => {
  const err = new Error('error');
  read.mockRejectedValue(err);
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toEqual(err);
  }
});
