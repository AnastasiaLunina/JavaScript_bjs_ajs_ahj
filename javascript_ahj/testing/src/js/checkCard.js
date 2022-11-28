export default function checkCard(input) {
  if (/^4[0-9]?(\d+)?$/.test(input)) {
    return '.visa';
  } if (/^(?:5[1-5][0-9]{14})$/.test(input)) {
    return '.master';
  } if (/^(?:3[47][0-9]{13})$/.test(input)) {
    return '.amex';
  } if (/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/.test(input)) {
    return '.discover';
  } if (/^(?:2131|1800|35(\d+)?)$/.test(input)) {
    return '.jcb';
  } if (/(^2||6)\d{16}/.test(input)) {
    return '.mir';
  } if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}/.test(input)) {
    return '.diners';
  }
  return null;
}
