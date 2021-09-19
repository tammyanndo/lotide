const eqArrays = function (arr1, arr2) {
  return arr1.toString() === arr2.toString();
}

const eqObjects = function (object1, object2) {
  const objectarr1 = Object.keys(object1);
  const objectarr2 = Object.keys(object2);

  if (objectarr1.length !== objectarr2.length) {
    return false;
  }
  for (let key of objectarr1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😎 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (actual !== expected) {
    console.log(`💩 Assertion Failed ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

let obj1 = {
  a: 1,
  b: 2,
  c: 4
};

let obj2 = {
  a: 1,
  b: 2,
  c: 3
};

assertObjectsEqual(obj1, obj2);

