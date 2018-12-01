const { trackChanges } = require('./lib');

describe('day 1', () => {
  describe('task 2', () => {
    it('given a list of values, finds the first value which loops when the array contents are summed', () => {
      expect(trackChanges([1, -1])).toBe(0);
      expect(trackChanges([3, 3, 4, -2, -4])).toBe(10);
      expect(trackChanges([-6, 3, 8, 5, -6])).toBe(5);
      expect(trackChanges([7, 7, -2, -7, -4])).toBe(14);
    });
  });
});