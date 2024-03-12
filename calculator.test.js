const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expect(6829290000).toBe(sum(43900000, 6785390000));
  });

  test('can add two negative numbers', () => {
    expect(-71).toBe(sum(-19, -52));
  });

  test('can add zero', () => {
    expect(56).toBe(sum(56, 0));
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
