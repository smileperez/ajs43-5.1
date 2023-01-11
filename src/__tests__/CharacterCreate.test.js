import Bowman from '../js/Bowman';
import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import Swordsman from '../js/Swordsman';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

test('1.1. Должен создаваться Class Character Bowman', () => {
  const received = new Bowman('TestName1');
  const expected = {
    name: 'TestName1',
    type: 'Bowman',
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
    name: 'TestName2',
    type: 'Daemon',
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
    name: 'TestName3',
    type: 'Magician',
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
    name: 'TestName4',
    type: 'Swordsman',
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
    name: 'TestName5',
    type: 'Undead',
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
    name: 'TestName6',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };

  expect(received).toEqual(expected);
});