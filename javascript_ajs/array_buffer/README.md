# Домашнее задание к лекции «`ArrayBuffer`»

---

## `ArrayBuffer`

### Легенда

Периодически данные приходят в бинарном формате и их необходимо преобразовать в какой-либо другой формат, например, строку json, чтобы потом распарсить в объект. Для этих манипуляций в том числе можно использовать объекты, которые предоставляются Web API - `File` и `Blob`, но прямая манипуляция `ArrayBuffer` будет в разы быстрее и эффективнее.

### Описание

У вас есть функция `getBuffer()`, которая эмулирует создание объекта типа `ArrayBuffer`. Вам необходимо реализовать класс `ArrayBufferConverter` с методом `load()`, который может загружать данные (сигнатура `load(buffer)`), и методом `toString`, который умеет переводить содержимое загруженного `ArrayBuffer` в строку.
```javascript
function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return (input => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
