const parseInputRow = rowString => {
  if (!rowString) {
    throw Error(`Invalid rowString: [${rowString}]`);
  }

  const [id, _, leftTop, widthHeight] = rowString.split(' ');
  if ([id, leftTop, widthHeight].some(param => !Boolean(param))) {
    throw Error('Expected parameter not present');
  }

  const [leftInches, topInches] = leftTop.slice(0, -1).split(',').map(Number);
  if (!Number.isInteger(leftInches) || !Number.isInteger(topInches)) {
    throw Error(`Expected input leftInches [${leftInches}] or topInches [${topInches}] not defined!`);
  }

  const [width, height] = widthHeight.split('x').map(Number);
  if (!Number.isInteger(width) || !Number.isInteger(height)) {
    throw Error(`Expected input width [${width}] or height [${height}] not defined!`);
  }


  return {
    id: Number(id.slice(1)),
    leftInches,
    topInches,
    width,
    height,
  }
};

const getOverlappingClaimsGrid = (rowStringArray = [], gridWidth = 1000, gridHeight = 1000) =>
  rowStringArray
    .map(parseInputRow)
    .reduce((claimArea, { id, leftInches, topInches, width, height }) => {
      for (let y = topInches; y < topInches + height; y++) {
        for (let x = leftInches; x < leftInches + width; x++) {
          claimArea[y] =
            claimArea[y].substr(0, x) +
            (claimArea[y].charAt(x) === '.' ? String(id)[0] : 'X') +
            claimArea[y].substr(x + 1);
          }
      }

      return claimArea;
    }, new Array(gridHeight).fill('.'.repeat(gridWidth), 0, gridHeight));

const getOverlappingClaimsCount = (rowStringArray = []) =>
  getOverlappingClaimsGrid(rowStringArray)
    .reduce((count, gridRow) => count + gridRow.split('').filter(char => char === 'X').join('').length, 0);

module.exports = {
  parseInputRow,
  getOverlappingClaimsGrid,
  getOverlappingClaimsCount,
};