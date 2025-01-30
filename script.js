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

// const createTable = (table, size, index) => {
//   let row = Math.floor(index / size);
//   let col = index - row * size;
//   let checkedNumbers = [];
//   let rand = Math.floor(Math.random() * (size + 1 - 1) + 1);

//   if (!checkedNumbers.includes(rand)) {
//     table[row][col] = rand;
//     checkedNumbers.push(rand);

//     if (isValid(table, row, col, size)) {
//       let returned = createTable(table, size, index + 1);

//       while (returned != 1) {
//         rand = Math.floor(Math.random() * (size + 1 - 1) + 1);

//         if (!checkedNumbers.includes(rand)) {
//           table[row][col] = rand;
//           checkedNumbers.push(rand);

//           if (isValid(table, row, col, size)) {
//             returned = createTable(table, size, index + 1);
//           }
//         }
//       }
//     }
//   }
//   return 1;
// };

// const createTable = (table, size, index) => {
//   if (index == size * size) {
//     return 1;
//   }
//   let row = Math.floor(index / size);
//   let col = index - row * size;
//   let checkedNumbers = [];
//   let rand = Math.floor(Math.random() * size) + 1;
//   table[row][col] = rand;
//   checkedNumbers.push(rand);

//   while (isValid(table, row, col, size) === false) {
//     if (checkedNumbers.length == 8) {
//       table[row][col] = 0;
//       return 0;
//     }
//     while (checkedNumbers.includes(rand) === true) {
//       rand = Math.floor(Math.random() * size) + 1;
//       table[row][col] = rand;
//     }
//     checkedNumbers.push(rand);
//   }

//   let returned = createTable(table, size, index + 1);
//   while (returned == 0) {
//     while (isValid(table, row, col, size) === false) {
//       if (checkedNumbers.length == 8) {
//         table[row][col] = 0;
//         return 0;
//       }
//       while (checkedNumbers.includes(rand) === true) {
//         rand = Math.floor(Math.random() * size) + 1;
//         table[row][col] = rand;
//       }
//       checkedNumbers.push(rand);
//     }

//     returned = createTable(table, size, index + 1);
//   }
//   return 1;
// };

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const createTable = (table, size, index) => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 5; i++) shuffleArray(numbers);
  console.log(numbers);
};

const size = 9;

table = createEmptyTable(size);
createTable(table, size, 0);
displayTable(table, size);
