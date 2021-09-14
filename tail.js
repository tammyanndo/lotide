const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩 Assertion Failed ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

const array = ["Hello", "Lighthouse", "Labs"]
const result = tail(array);
console.log(result);
console.log(array);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
