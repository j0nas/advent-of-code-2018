const countLetterDuplicates = (string = '') => {
  const chars = string.split('');
  const countLetters = letter => string.split(letter).length - 1;
  return {
    two: chars.some(char => countLetters(char) === 2),
    three: chars.some(char => countLetters(char) === 3),
  }
};

const getBoxChecksum = (ids = []) => {
  const twos = ids.filter(id => countLetterDuplicates(id).two).length;
  const threes = ids.filter(id => countLetterDuplicates(id).three).length;
  return twos * threes;
};

module.exports = {
  countLetterDuplicates,
  getBoxChecksum,
};