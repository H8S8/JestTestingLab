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
    expect(sum(43900000, 6785390000)).toBe(6829290000);
  });

  test('can add two negative numbers', () => {
    expect(sum(-19, -52)).toBe(-71);
  });

  test('can add zero', () => {
    expect(sum(56, 0)).toBe(56);
  });

  test('can add decimals', () =>{
    expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
  })

});

describe('subtract', () => {

  test('can subtract a large positive number from a small positive number', () => {
    expect(subtract(7, 30)).toBe(-23);
  })

  test('can subract a negative number from a positive number', () => {
    expect(subtract(4, -16)).toBe(20);
  })

  test('can subtract zero', () => {
    expect(subtract(56, 0)).toBe(56);
  })

});

describe('multiply', () => {

  test('can multiply two positive numbers', () => {
    expect(multiply(7, 8)).toBe(56);
  })

  test('can multiply a negative number and a positive number', () => {
    expect(multiply(3, -5)).toBe(-15);
  })

  test('can multiply two negative numbers', () => {
    expect(multiply(-9, -9)).toBe(81);
  })

  test('can multiply by zero', () => {
    expect(multiply(574823957, 0)).toBe(0);
  })

});

describe('divide', () => {

  test('can divide a positive number by one of its positive divisors', () => {
    expect(divide(15, 3)).toBe(5);
  })

  test('can divide a positive number by one of its negative divisors', () => {
    expect(divide(40, -2)).toBe(-20);
  })

  test('can divide a negative number by a negative number, expecting a decimal', () => {
    expect(divide(-11, -2)).toBe(5.5);
  })

  test('can do division resulting in recurring decimal', () => {
    expect(divide(10, 3)).toBeCloseTo(3.3333333);
  })

  test('returns Infinity when dividing by zero', () => {
    expect(divide(36, 0)).toBe(Infinity);
  })

  test('return NaN when dividing zero by zero', () => {
    expect(divide(0, 0)).toBeNaN();
  })
});

describe('modulus', () => {

  test('can get modulo division of a positive number by a positive number', () => {
    expect(modulus(7, 4)).toBe(3);
  })

  test('can get modulo division of a positive number by a negative number', () => {
    expect(modulus(13, -2)).toBe(1);
  })

  test('can get a modulo division of a negative number by a positive number', () => {
    expect(modulus(-7, 5)).toBe(-2); // This maths is horrible
  })

  test('can do modulo division of zero', () => {
    expect(modulus(0, 8)).toBe(0);
  })

  test('return NaN when doing modulo division by zero', () => {
    expect(modulus(9, 0)).toBeNaN();
  })
});

describe('even', () => {

  test('function works for a positive number', () => {
    expect(even(5)).toBe(false);
  })

  test('function works for a negative number', () => {
    expect(even(-6)).toBe(true);
  })

  test('function works for a decimal number', () => {
    expect(even(8.2)).toBe(false);
  })

  test('function works for zero', () => {
    expect(even(0)).toBe(true);
  })

});

describe('odd', () => {

  test('function works for a negative number', () => {
    expect(odd(-5)).toBe(true);
  })

  test('function works for a positive number', () => {
    expect(odd(6)).toBe(false);
  })

  test('function works for a decimal number', () => {
    expect(odd(8.2)).toBe(false);
  })

  test('function works for zero', () => {
    expect(odd(0)).toBe(false);
  })

});
