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

const countLetters = function(allLetters) {
  const results = {};
  for (const letter of allLetters) {
    console.log(letter);
    if (letter) {
      if (results[letter]) {
        results[letter] +=1;
      } else {
        results[letter] = 1;
      
      }
    }
  }
}

function count (string) {
  const count = {}
    string.split('').forEach(char => {
      count[char] = count[char] ? (count[char] + 1) : 1;
    })
    console.log(count);
    return count
  }
  let result1 = count("lighthouse in the house");

assertEqual(result1['l'], 1);
assertEqual(result1['i'], 2);
assertEqual(result1['g'], 1);
assertEqual(result1['h'], 4);
assertEqual(result1['w'], undefined);


