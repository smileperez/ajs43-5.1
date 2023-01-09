import Bowman from '../js/classBowman';
import Daemon from '../js/classDaemon';
import Magician from '../js/classMagician';
import Swordsman from '../js/classSwordsman';
import Undead from '../js/classUndead';
import Zombie from '../js/classZombie';

test('1.1. Должен создаваться Class Character Bowman', () => {
  const received = new Bowman('TestName1');
  const expected = {
    _name: 'TestName1',
    _type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };

  expect(received).toEqual(expected);
});

test('1.2. Должен создаваться Class Character Daemon', () => {
  const received = new Daemon('TestName2');
  const expected = {
    _name: 'TestName2',
    _type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };

  expect(received).toEqual(expected);
});

test('1.3. Должен создаваться Class Character Magician', () => {
  const received = new Magician('TestName3');
  const expected = {
    _name: 'TestName3',
    _type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };

  expect(received).toEqual(expected);
});

test('1.4. Должен создаваться Class Character Swordsman', () => {
  const received = new Swordsman('TestName4');
  const expected = {
    _name: 'TestName4',
    _type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };

  expect(received).toEqual(expected);
});

test('1.5. Должен создаваться Class Character Undead', () => {
  const received = new Undead('TestName5');
  const expected = {
    _name: 'TestName5',
    _type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };

  expect(received).toEqual(expected);
});

test('1.6. Должен создаваться Class Character Zombie', () => {
  const received = new Zombie('TestName6');
  const expected = {
    _name: 'TestName6',
    _type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };

  expect(received).toEqual(expected);
});