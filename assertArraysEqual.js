const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("These arrays are identical.")
  } else {
    console.log("These arrays are not identical.")
  }
}
  module.exports = assertArraysEqual