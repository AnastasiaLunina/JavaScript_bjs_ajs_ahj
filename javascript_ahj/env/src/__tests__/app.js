import demo from '../js/app';

test('testing demo function', () => {
  const result = demo(111);
  expect(result).toBe(111);
});
