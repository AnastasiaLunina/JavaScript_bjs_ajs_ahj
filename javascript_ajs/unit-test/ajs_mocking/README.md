[![Build status](https://ci.appveyor.com/api/projects/status/l2t3wpapolalmnta/branch/main?svg=true)](https://ci.appveyor.com/project/AnastasiaLunina/ajs-mocking/branch/main)

## Описание установки

```shell
npm init
# При инициалиализации в качестве тестовой команды указать:
# test command: jest --coverage
npm install --save-dev jest babel-jest @babel/core @babel/cli @babel/preset-env
npm install core-js@3
```

Не забудьте про `.babelrc` и `.browserslistrc`.

В `.babelrc`:
```json
{
  "presets": [["@babel/preset-env", {
    "useBuiltIns": "usage",
    "corejs": 3
  }]]
}
```

Запуск тестов:
```shell
npm test
```

---

## Mocking (задача со звёздочкой)

**Важно**: данная задача не является обязательной 

### Легенда

Вы написали функцию, которая взаимодействует с функцией `fetchData` (достаточно тяжёлой, т.к. взаимодействует с удалённым веб-сервером). Вы хотите протестировать свою функцию (в том числе на то, как она обрабатывает ошибки) и, чтобы «отвязаться» от этой тяжёлой зависимости, решили использовать механизм «mocking'а».

### Описание

```javascript
// Демо-реализация функции fetchData (модуль http):
export default function fetchData(url) {
  throw new Error('Mock this!');
}
```

```javascript
// Ваша функция:
import fetchData from './http';

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);
  
  // TODO: логика обработки
  if (response.status === 'ok') {
     return `Ваш текущий уровень: ${response.level}`; 
  }
  
  return `Информация об уровне временно недоступна`;
}
```

Сделайте моки для функции `fetchData` и напишите тесты таким образом, чтобы обеспечить 100% покрытие тестами функции `getLevel` по строкам.

**Обратите внимание**: тесты вам надо писать для функции `getLevel`

---