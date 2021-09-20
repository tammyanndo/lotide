const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

let array1 = [1, 2, 3, 4, 5, 6]
let array2 = middle(array1);
let array3 = [3, 4];
assertArraysEqual(array2, array3);
console.log(middle(array1));