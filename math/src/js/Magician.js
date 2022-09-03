// jshint esversion:6
// import Character from './Character';
import MathClass from './MathClass';

export default class Magician extends MathClass {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
