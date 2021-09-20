const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const array = ["Hello", "Lighthouse", "Labs"];
const result = tail(array);
console.log(result);
console.log(array);