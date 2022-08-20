// jshint esversion:8

export default function destructuringObj(obj) {
  const result = [];
  const { special } = obj;

  special.forEach((item) => {
    // eslint-disable-next-line
    const { id, name, icon, description = 'Описание не доступно'} = item;
    result.push(
      {
        id, name, icon, description,
      },
    );
  });
  return result;
}
