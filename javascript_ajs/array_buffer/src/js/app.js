// jshint esversion:8

export default class ArrayBufferConverter {
  constructor() {
    this.buffer = '';
  }

  load(buffer) {
    this.buffer = new Uint16Array(buffer);
  }

  toString() {
    return String.fromCharCode.apply(null, this.buffer);
  }
}
