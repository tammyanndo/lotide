const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("These arrays are identical.")
  } else {
    console.log("These arrays are not identical.")
  }
}
const eqArrays = function (arr1, arr2) {
  return arr1.toString() === arr2.toString();
}
 const letterPositions = (sentence) => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence.charAt(i);
    if (char.indexOf(' ') >= 0)
      continue;
    if (results[char])
      results[char].push(i);
    else
      results[char] = [i];
  }
  return results;
};
const sentence = "lighthouse in the house";
assertArraysEqual(letterPositions(sentence).h, [3, 15, 18]);