const transpose = function (matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const transposedMatrix = [];
  for (let j = 0; j < numCols; j++) {
    const newRow = [];
    for (let i = 0; i < numRows; i++) {
      newRow.push(matrix[i][j]);
    }
    transposedMatrix.push(newRow);
  }

  return transposedMatrix;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  if (word.length === 0) {
    return false;
  } else {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }

    // Vertical Search
    let transLetters = transpose(letters);
    const verticalJoin = transLetters.map((ls) => ls.join(""));
    for (l of verticalJoin) {
      if (l.includes(word)) return true;
    }
  }
  return false;
};

module.exports = wordSearch;
