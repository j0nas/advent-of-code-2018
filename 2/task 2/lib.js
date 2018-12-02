const getSimilarIdsDiff = (ids = []) => {
  let differingCharacterIndex;
  const similarId = ids.find(id => {
    const chars = id.split('');
    return ids.find(idsId => idsId
      .split('')
      .filter((char, index) => {
        if (chars[index] !== char) {
          differingCharacterIndex = index;
          return true;
        }
      }).length === 1)
  });

  if (!Number.isInteger(differingCharacterIndex)) {
    throw Error('differingCharacterIndex not found');
  }

  return similarId.slice(0, differingCharacterIndex) + similarId.slice(differingCharacterIndex + 1);
};

module.exports = {
  getSimilarIdsDiff,
};