const trackChanges = (array = [], maxIterations = 10000) => {
  const seenFrequencies = [0];
  let spottedDuplicate = false;
  let iterations = 0;

  const getFrequency = (initialFrequency = 0) => {
    iterations++;
    if (iterations > maxIterations) {
      throw Error('Max iterations reached');
    }

    return array.slice(0).reduce((frequency, item, i, arr) => {
      const newFrequency = frequency + item;

      if (seenFrequencies.includes(newFrequency)) {
        arr.splice(1);
        spottedDuplicate = true;
      }

      seenFrequencies.push(newFrequency);
      return newFrequency;
    }, initialFrequency);
  };

  let lastFrequency = getFrequency();
  while (!spottedDuplicate) {
    lastFrequency = getFrequency(lastFrequency);
  }

  return lastFrequency;
};

module.exports = {
  trackChanges,
};