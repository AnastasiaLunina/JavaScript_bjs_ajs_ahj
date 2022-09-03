// jshint esversion:8
export default function read() {
// eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    // эмуляция чтения файла
    setTimeout(() => {
      const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
      return ((input) => {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        // eslint-disable-next-line
        for (let i = 0; i < input.length; i++) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      })(data);
    }, 1000);
  });
}
