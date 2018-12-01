const { sum } = require('./index')

describe('index', () => {
    it('Sums given values', () => expect(sum(1, 1)).toBe(2));
});