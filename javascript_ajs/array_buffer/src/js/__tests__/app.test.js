// jshint esversion:6
import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../app';

test('ArrayBufferConverter can load data and convert it to the string', () => {
  const arrayBufferConverter = new ArrayBufferConverter();

  arrayBufferConverter.load(getBuffer());
  expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
