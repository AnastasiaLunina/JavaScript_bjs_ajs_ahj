// jshint esversion:6

export default function orderByProps(obj, arr) {
  const res = [];
  const arrMain = [];

  // eslint-disable-next-line guard-for-in
  for (const prop in obj) {
    const newObj = { key: prop, value: obj[prop] };

    if (arr.indexOf(prop) === -1) {
      arrMain.push(newObj);
    } else {
      res[arr.indexOf(prop)] = newObj;
    }

    arrMain.sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      }
      return -1;
    });
  }

  const arrJoin = [...res, ...arrMain];
  return arrJoin;
}
