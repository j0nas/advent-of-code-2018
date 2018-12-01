const { sum, sumArray } = require('./lib');

describe('day 1', () => {
    describe('task 1', () => {
        it('Sums given values', () => expect(sum(1, 1)).toBe(2));
        
        it('sums given array of frequencies', () => {
            expect(sumArray([1, 1, 1,])).toBe(3);
            expect(sumArray([1, 1, -2,])).toBe(0);
            expect(sumArray([-1, -2, -3])).toBe(-6);
        });
    });
});