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

  test('can subtract a large positive number from a small positive number', () => {
    expect(-23).toBe(subtract(7, 30));
  })

  test('can subract a negative number from a positive number', () => {
    expect(20).toBe(subtract(4, -16));
  })

  test('can subtract zero', () => {
    expect(56).toBe(subtract(56, 0));
  })

});

describe('multiply', () => {

  test('can multiply two positive numbers', () => {
    expect(56).toBe(multiply(7, 8));
  })

  test('can multiply a negative number and a positive number', () => {
    expect(-15).toBe(multiply(3, -5));
  })

  test('can multiply two negative numbers', () => {
    expect(81).toBe(multiply(-9, -9));
  })

  test('can multiply by zero', () => {
    expect(0).toBe(multiply(574823957, 0));
  })

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
