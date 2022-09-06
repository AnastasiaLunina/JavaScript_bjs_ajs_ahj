// jshint esversion:8

export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(200, 'Status OK');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
