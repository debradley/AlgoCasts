// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return [...str].reverse().join("");
}

function reverseLoop(str) {
  const reversed = [];
  for (const c of str) {
    reversed.unshift(c);
  }

  return reversed.join("");
}

function reduced(str) {
  return [...str].reduce((reversed, char) => char + reversed, "");
}

module.exports = reverse;
