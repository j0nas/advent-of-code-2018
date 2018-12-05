const { parseInputRow, getOverlappingClaimsGrid, getOverlappingClaimsCount } = require('./lib');

describe('day 3', () => {
  describe('task 1', () => {
    it('parseInputRow', () => {
      expect(parseInputRow('#123 @ 3,2: 5x4')).toEqual({ id: 123, leftInches: 3, topInches: 2, width: 5, height: 4 });
      expect(parseInputRow('#1 @ 1,3: 4x4')).toEqual({ id: 1, leftInches: 1, topInches: 3, width: 4, height: 4 });
      expect(parseInputRow('#2 @ 3,1: 4x4')).toEqual({ id: 2, leftInches: 3, topInches: 1, width: 4, height: 4 });
      expect(parseInputRow('#3 @ 5,5: 2x2')).toEqual({ id: 3, leftInches: 5, topInches: 5, width: 2, height: 2 });
    });

    it('getOverlappingClaims', () =>
      expect(getOverlappingClaimsGrid([
        '#1 @ 1,3: 4x4',
        '#2 @ 3,1: 4x4',
        '#3 @ 5,5: 2x2'
      ], 8, 8)).toEqual([
        '........',
        '...2222.',
        '...2222.',
        '.11XX22.',
        '.11XX22.',
        '.111133.',
        '.111133.',
        '........',
      ]));

    it('getOverlappingClaimsCount', () =>
      expect(getOverlappingClaimsCount([
        '#1 @ 1,3: 4x4',
        '#2 @ 3,1: 4x4',
        '#3 @ 5,5: 2x2'
      ])).toBe(4));
  });
});