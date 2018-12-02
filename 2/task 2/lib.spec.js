const { getSimilarIdsDiff } = require('./lib');

describe('day 2', () => {
  describe('task 2', () => {
    it('getSimilarIdsDiff', () =>
      expect(getSimilarIdsDiff(['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'])).toBe('fgij'));
  });
});