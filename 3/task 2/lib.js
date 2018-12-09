const { parseInputRow } = require("../task 1/lib");

const create2DArray = (numRows, numColumns) => {
  const array = new Array(numRows);
  for (let i = 0; i < numColumns; i++) {
    array[i] = new Array(numColumns).fill([]);
  }

  return array;
};

const getClaimsGrid = (rowStringArray = [], gridWidth = 1000, gridHeight = 1000) =>
  rowStringArray
    .map(parseInputRow)
    .reduce((claimArea, { id, leftInches, topInches, width, height }) => {
        for (let y = topInches; y < topInches + height; y++) {
          for (let x = leftInches; x < leftInches + width; x++) {
            claimArea[y][x] = [...claimArea[y][x], id];
          }
        }

        return claimArea;
      },
      create2DArray(gridWidth, gridHeight));

const getNonOverlappingClaimId = rowStringArray => {
  const encounteredSingleClaimIds = [];
  const duplicateClaimIds = [];
  getClaimsGrid(rowStringArray).forEach(row => {
    row.forEach(column => {
      if (column.length === 1) {
        if (!encounteredSingleClaimIds.includes(column[0])) {
          encounteredSingleClaimIds.push(column[0]);
        }
      } else {
        column
          .filter(id => !duplicateClaimIds.includes(id))
          .forEach(id => duplicateClaimIds.push(id));
      }
    })
  });

  return encounteredSingleClaimIds.filter(id => !duplicateClaimIds.includes(id))[0];
};


module.exports = {
  getClaimsGrid,
  getNonOverlappingClaimId,
};