const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();  
} // return true or false

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("These arrays are identical.")
  } else {
    console.log("These arrays are not identical.")
  }
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

const numbers = [1, 2, 3];
const results2 = map(numbers, num => num + 1);

const wordLength = ['I', 'am', 'sleepy']
const results3 = map(wordLength, len => len.length);


console.log(results1);
console.log(results2);
console.log(results3);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArraysEqual(results2, [2, 3, 4]);
assertArraysEqual(results3, [1, 2, 6]);
