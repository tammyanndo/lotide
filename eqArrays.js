const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩 Assertion Failed ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();  
}
assertEqual(eqArrays([1, 3, 3], [1, 3, 3]), true);

