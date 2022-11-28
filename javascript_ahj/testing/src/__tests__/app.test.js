import validateCard from '../js/validateCard';
import checkCard from '../js/checkCard';

test.each([
  ['valid', '3860095109241923522', true],
  ['valid', '4124278015914935', true],
  ['valid', '5175051167064741', true],
  ['valid', '370106954339849', true],
  ['valid', '6575443669971347', true],
  ['valid', '3540079896826938051', true],
  ['valid', '2119899761108074', true],
  ['invalid', '1234567', false],
  ['invalid', '123', false],
  ['invalid', '000998877665544', false],
  ['invalid', '00000000011223', false],
])(('it should be %s'), (_, value, expected) => {
  expect(validateCard(value)).toBe(expected);
});

test.each([
  ['valid', '36349042290774', '.diners'],
  ['valid', '4124278015914935', '.visa'],
  ['valid', '5175051167064741', '.master'],
  ['valid', '370106954339849', '.amex'],
  ['valid', '6575443669971347', '.discover'],
  ['valid', '3540079896826938051', '.jcb'],
  ['valid', '2119899761108074', '.mir'],
])(('it should be %s'), (_, value, expected) => {
  expect(checkCard(value)).toBe(expected);
});
