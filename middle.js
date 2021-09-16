const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();  
}
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("These arrays are identical.")
  } else {
    console.log("These arrays are not identical.")
  }
}

  const middle = function(array) {
    let midarray = [];
    if (array.length <=2) {
      return [];
    } 
    midarray = array[Math.floor(array.length / 2)]
      if (array.length % 2 === 0) {
        let a = array[Math.floor((array.length - 1) / 2)];
        return [a,midarray];
      }  
        return [midarray];
  }

  let array1 = [1,2,3,4,5,6]
  let array2 = middle(array1);
  let array3 = [3,4];
  assertArraysEqual(array2, array3);