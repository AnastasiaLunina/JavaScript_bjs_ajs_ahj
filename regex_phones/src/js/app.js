// jshint esversion:8

export default function validator(phoneNumber) {
  const reSymbols = phoneNumber.replace(/[\s()-]/gm, '').replace(/^8/, '+7');

  return reSymbols;
}
