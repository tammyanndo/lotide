const eqArrays = function(arr1, arr2) {
const x = arr1.toString() === arr2.toString();
if (x === true) {
  console.log("These arrays are identical.")
} else {
  console.log("These arrays are not identical.")
} return
}
eqArrays([1, 2, 3], [1, 2, 3]);