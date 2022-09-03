// jshint esversion:8

export default class Validator {
  constructor() {
    this.reAllowable = /^[\w-]+$/i;
    this.reThreeDigits = /\d{3}/;
  }

  validateUsername(name) {
    if (!this.reAllowable.test(name) || this.reThreeDigits.test(name)) {
      return false;
    }
    return true;
  }
}
