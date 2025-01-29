const createEmptyTable = (nrRows) => {
  // table will be an object that has { row : {c1: val, c2 : val, ...}, }
  table = {};
  for (let i = 1; i <= nrRows; i++) {
    table[i] = {};
  }
  return table;
};

function checkNumber(table) {}

console.log(createEmptyTable(6));
