import Character from '../js/character';

test('character instanse created', () => {
  const goblin = new Character();
  const character = goblin.getCharacter();
  const received = character.classList.contains('goblin');
  expect(received).toBeTruthy();
});
