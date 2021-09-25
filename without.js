// const eqArrays = require('./eqArrays');

// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log("These arrays are identical.")
//   } else {
//     console.log("These arrays are not identical.")
//   }
// }
//   module.exports = assertArraysEqual

const without = function(source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    if (source[i] === itemsToRemove) {
      source.splice(i, 1);
    }
    return without
  } 
  }

 console.log(without([1, 2, 3], [1]))

