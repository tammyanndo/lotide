const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😎 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩 Assertion Failed ${actual} !== ${expected}`);
  }
};

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

// const ob1 = { a: "5", b: "2" };
// const ob2 = { b: "2", a: "1" }

// console.log(eqObjects(ob1, ob2));

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// assertEqual(eqObjects(cd, dc), true);

let obj1 = {
  a: 1,
  b: 2,
  c: 3
};

let obj2 = {
  a: 1,
  b: 2,
  c: 3
};
assertEqual(eqObjects(obj1, obj2), true)