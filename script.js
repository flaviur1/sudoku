const createEmptyTable = (size) => {
  // table will be an object that has { row : {c1: val, c2 : val, ...}, }
  table = {};
  for (let i = 1; i <= size; i++) {
    table[i] = {};
  }
  return table;
};

const checkNumber = (table, row, col, size) => {
  for (let i = 1; i <= size; i++) {
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

table = createEmptyTable(6);
table[1][1] = 1;
table[1][2] = 2;
table[1][3] = 3;
table[1][4] = 4;
table[1][5] = 5;
table[1][6] = 6;
table[1][7] = 7;
table[1][8] = 8;
table[1][9] = 9;

let str = "1";

document.getElementById(str).innerHTML = table[1][1];

console.log(table);
console.log(checkNumber(table, 1, 1, 6));
table[1][6] = 1;
console.log(checkNumber(table, 1, 1, 6));
