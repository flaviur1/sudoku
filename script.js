const createEmptyTable = (size) => {
  // table will be an object that has { row : {c1: val, c2 : val, ...}, }
  table = {};
  for (let i = 0; i < size; i++) {
    table[i] = {};
  }
  return table;
};

const isValid = (table, row, col, size) => {
  for (let i = 0; i < size; i++) {
    // we will check both the row and the col in the same iteration
    if (i != row) {
      if (table[i][col] == table[row][col]) return false;
    }
    if (i != col) {
      if (table[row][i] == table[row][col]) return false;
    }
  }

  let squareStartRow = Math.floor(row / 3) * 3;
  let squareStartCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let currentRow = squareStartRow + i;
      let currentCol = squareStartCol + j;

      if (currentRow != row || currentCol != col) {
        if (table[currentRow][currentCol] == table[row][col]) {
          return false;
        }
      }
    }
  }

  return true;
};

const displayTable = (table, size) => {
  for (let i = 0; i < size * size; i++) {
    let row = Math.floor(i / size);
    let col = i - row * size;
    if (table[row] != undefined && table[row][col] != undefined) {
      document.getElementById(i).innerHTML = table[row][col];
    }
  }
};

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const createValidTable = (table, size, index) => {
  if (index == 81) {
    return 1;
  }
  let numbers = [];
  for (let i = 1; i <= size; i++) {
    numbers.push(i);
  }

  for (let i = 0; i < 5; i++) {
    shuffleArray(numbers);
  }

  let row = Math.floor(index / size);
  let col = index - row * size;

  for (let i = 0; i < numbers.length; i++) {
    table[row][col] = numbers[i];

    if (isValid(table, row, col, size)) {
      let returned = createValidTable(table, size, index + 1);

      if (returned == 1) {
        return 1;
      }
    }
    table[row][col] = 0;
    if (i == numbers.length - 1) {
      return 0;
    }
  }
  return 0;
};

const size = 9;

table = createEmptyTable(size);
createValidTable(table, size, 0);
displayTable(table, size);
