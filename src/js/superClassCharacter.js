export default class Character {
  constructor(name, type, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
  }

  set name(name) {
    if (name === '') {
      throw new Error('Имя не может быть пустым');
    } else if (typeof name !== 'string') {
      throw new Error('Имя должно быть строкой');
    } else if (name.length < 2) {
      throw new Error('Имя должно быть не менее 2 символов');
    } else if (name.length > 10) {
      throw new Error('Имя должно быть не более 10 символов');
    }
    this._name = name;
  }

  set type(type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (type === '') {
      throw new Error('Тип персонажа не может быть пустым');
    } else if (typeof type !== 'string') {
      throw new Error('Тип персонажа должен быть строкой');
    } else if (types.includes(type) === false) {
      throw new Error('Возможные типы персонажей: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this._type = type;
  }
}
