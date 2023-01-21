const testMathOperations = require('./mathOperations');

describe('sum test',() => {
    test('adding 5 + 4 should return 9', () => {
        expect(testMathOperations.sum(5,4)).toBe(9);
    });
});

describe('dif test',() => {
    test('difference between 5 - 4 should return 1', () => {
        expect(testMathOperations.diff(5,4)).toBe(9);
    });
});

describe('product test',() => {
    test('product of 5 * 4 should return 20', () => {
        expect(testMathOperations.product(5,4)).toBe(20);
    });
});