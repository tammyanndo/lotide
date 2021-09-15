const eqArrays = function(arr1, arr2) {
const assertArrayEqual = arr1.toString() === arr2.toString();
if (assertArrayEqual === true) {
  console.log("These arrays are identical.")
} else {
  console.log("These arrays are not identical.")
} return
}
eqArrays([1, 2, 3], [1, 2, 3]);