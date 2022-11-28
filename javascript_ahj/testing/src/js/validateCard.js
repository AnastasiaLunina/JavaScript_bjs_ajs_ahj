/* eslint-disable no-plusplus */
/* eslint-disable no-cond-assign */

// Based on Lunh Algorithm

export default function validateCard(value) {
  const newValue = value.replace(/\D/g, '');

  let check = 0;
  let even = false;

  for (let n = newValue.length - 1; n >= 0; n--) {
    let digit = parseInt(newValue.charAt(n), 10);

    if (even && (digit *= 2) > 9) {
      digit -= 9;
    }

    check += digit;
    even = !even;
  }

  return (check % 10) === 0;
}
