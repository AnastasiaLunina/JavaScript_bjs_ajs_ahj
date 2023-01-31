export default function validate(geo) {
  if (geo.match(/[^0-9[\]-\s.,]/g)) {
    throw new Error('');
  }

  const pos = geo.replace(/[[\]\s+]/g, '');
  const arr = pos.split(',');
  const latitude = Number(arr[0]);
  const longitude = Number(arr[1]);

  return { latitude, longitude };
}
