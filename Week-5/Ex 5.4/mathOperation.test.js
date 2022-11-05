const mathOperations = require('./mathOperations')

test('Adds to numbers', () => {
    expect(mathOperations.sum(3, 2)).toBe(5)
})

test('subtracts to numbers', () => {
    expect(mathOperations.diff(5, 2)).toBe(3)
})

test('multiplies to numbers', () => {
    expect(mathOperations.product(6, 5)).toBe(30)
})