import Character from './superClassCharacter';

export default class Swordsman extends Character {
  constructor(name, type = 'Swordsman', attack = 40, defence = 10) {
    super(name, type);
    this.attack = attack;
    this.defence = defence;
  }
}
