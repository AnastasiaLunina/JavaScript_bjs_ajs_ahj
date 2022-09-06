// jshint esversion:6
export default class Character {
  constructor(name, type, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = undefined;
    this.defence = undefined;

    const characters = ['Bowman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];
    if (typeof name !== 'string' || name.length < 2 || name.length > 10 || !characters.includes(type)) {
      throw new Error('Wrong input');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level = 1;
      this.attack = (this.attack * 0.20) + this.attack;
      this.defence = (this.defence * 0.20) + this.defence;
      this.health = 100;
    } else {
      throw new Error("Can't raise the level of someone who is dead");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else if (this.health < 0) {
      throw new Error("Can't damage someone who is dead");
    }
  }
}
