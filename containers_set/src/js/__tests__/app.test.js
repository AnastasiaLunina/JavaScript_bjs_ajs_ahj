// jshint esversion:6
import Team from '../app';

test('Method adds a single character "Cat women"', () => {
  const team = new Team();

  team.add('Cat women');
  expect(team.members).toContain('Cat women');
});

test('Method add throws an error if existing character "Cat women" is added', () => {
  const team = new Team();

  team.add('Cat women');
  expect(() => team.add('Cat women')).toThrowError();
});

test('Method addAll adds several characters', () => {
  const team = new Team();

  team.addAll('Cat women', 'Wonder Woman', 'Batgirl');
  expect(team.members).toContain('Cat women', 'Wonder Woman', 'Batgirl');
});

test('Method toArray converts set to array', () => {
  const team = new Team();

  team.addAll('Cat women', 'Wonder Woman', 'Batgirl');
  expect(team.toArray()).toEqual(['Cat women', 'Wonder Woman', 'Batgirl']);
});
