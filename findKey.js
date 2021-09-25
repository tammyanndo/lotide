const { assert } = require("chai");

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩 Assertion Failed ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key]))
    return key
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))


console.log(findKey({
  "red": { letters: 3 },
  "orange":   { letters: 6 },
  "yellow":      { letters: 6 },
  "green":   { letters: 5 },
  "blue":       { letters: 4 },
  "purple":  { letters: 6 }
}, colors => colors.letters === 5))

assertEqual(findKey({
  "red": { letters: 3 },
  "orange":   { letters: 6 },
  "yellow":      { letters: 6 },
  "green":   { letters: 5 },
  "blue":       { letters: 4 },
  "purple":  { letters: 6 }
}, colors => colors.letters === 5), 'green');

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma')