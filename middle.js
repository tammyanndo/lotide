const middle = function (array) {
  let midarray = [];
  if (array.length <= 2) {
    return [];
  }
  midarray = array[Math.floor(array.length / 2)]
  if (array.length % 2 === 0) {
    let a = array[Math.floor((array.length - 1) / 2)];
    return [a, midarray];
  }
  return [midarray];
}

module.exports = middle
