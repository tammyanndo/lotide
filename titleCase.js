function titleCase(text) {
  text = text.toLowerCase().split(' ');
  console.log(text)

  let capWord = text.map(function(letter) {
    return (letter.charAt(0).toUpperCase() + letter.slice(1));

  })

  let finalWord = capWord.join(' ');
  return finalWord;
 
};

console.log(titleCase('YOU ARE MY SUNSHINE'));

const assert = require('chai').assert;

describe("#titleCase", () => {
  it("return 'You Are My Sunshine' for 'YOU ARE MY SUNSHINE", () => {
    assert.strictEqual(titleCase(text), 'You Are My Sunshine' );
  });
});
