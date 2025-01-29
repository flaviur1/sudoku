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

const transferNumbers = (table, size) => {
  for (let i = 1; i < size * size; i++) {
    let row = Math.floor(i / size);
    let col = i % size;
    console.log("row " + row + " col " + col);
    if (table[row] != undefined && table[row][col] != undefined) {
      document.getElementById(i).innerHTML = table[row][col];

    }
  }
};

table = createEmptyTable(9);
table[0][0] = 1;
table[0][1] = 2;
table[0][2] = 3;
table[0][3] = 4;
table[0][4] = 5;
table[0][5] = 6;
table[0][6] = 7;
table[0][7] = 8;
table[0][8] = 9;

let str = "57";

document.getElementById(str).innerHTML = table[0][0];

console.log(table);
console.log(checkNumber(table, 0, 0, 9));
table[0][5] = 1;
console.log(checkNumber(table, 0, 0, 9));
transferNumbers(table, 9);
