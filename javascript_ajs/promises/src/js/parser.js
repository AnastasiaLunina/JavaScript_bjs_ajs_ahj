// jshint esversion:8

export default function json(data) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    }, 500);
  });
}
