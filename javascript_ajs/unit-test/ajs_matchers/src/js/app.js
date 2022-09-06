// jshint esversion:6

export default function sortCaharcters(characters) {
  return characters.sort((a, b) => b.health - a.health);
}
