const { countLetterDuplicates, getBoxChecksum } = require('./lib');

describe('day 2', () => {
  describe('task 1', () => {
    it('countLetterDuplicates', () => {
      expect(countLetterDuplicates('abcdef')).toEqual({ two: false, three: false });
      expect(countLetterDuplicates('bababc')).toEqual({ two: true, three: true });
      expect(countLetterDuplicates('abbcde')).toEqual({ two: true, three: false });
      expect(countLetterDuplicates('abcccd')).toEqual({ two: false, three: true });
      expect(countLetterDuplicates('aabcdd')).toEqual({ two: true, three: false });
      expect(countLetterDuplicates('abcdee')).toEqual({ two: true, three: false });
      expect(countLetterDuplicates('ababab')).toEqual({ two: false, three: true });
    });

    it('getBoxCheckSum', () =>
      expect(getBoxChecksum(['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'])).toBe(12));
  });
});