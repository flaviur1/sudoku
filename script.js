const createEmptyTable = (size) => {
  // table will be an object that has { row : {c1: val, c2 : val, ...}, }
  table = {};
  for (let i = 0; i < size; i++) {
    table[i] = {};
  }
  return table;
};

const checkNumber = (table, row, col, size) => {
  for (let i = 0; i < size; i++) {
    // we will check both the row and the col in the same iteration
    if (i != row) {
      if (table[i][col] == table[row][col]) return false;
    }

    if (i != col) {
      if (table[row][i] == table[row][col]) return false;
    }
  }
  return true;
};

const displayTable = (table, size) => {
  for (let i = 0; i < size * size; i++) {
    let row = Math.floor(i / size);
    let col = i - row * 9;
    if (table[row] != undefined && table[row][col] != undefined) {
      document.getElementById(i).innerHTML = table[row][col];
    }
  }
};

const createTable = (table, size) => {
  for (let i = 0; i < size * size; i++) {
    let row = Math.floor(i / size);
    let col = i - row * 9;
  }
};

table = createEmptyTable(9);
displayTable(table, 9);
