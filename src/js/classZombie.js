import Character from './superClassCharacter';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie', attack = 40, defence = 10) {
    super(name, type);
    this.attack = attack;
    this.defence = defence;
  }
}
