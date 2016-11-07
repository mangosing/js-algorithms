/**
 * Add a number to the middle of an array
 *
 * Solution: Find the index closest to the 'middle' of an array. Then add the
 *           elements that follow it to separate
 */
const expect = require('chai').expect;


/**
 * Complexity: O((n/2)^2)
 */
function SlowMiddleShift(string, char: string) {
  const middleIndex = Math.floor(string.length / 2);
  let formatted = string.substring(0, middleIndex);

  // BAD
  // O((n/2)^2)
  formatted += char;

  for (let i = middleIndex; i < string.length; i++) {
    formatted += string[i];
  }

  return formatted;
}

/**
 * Complexity: O(n+1)
 */
function FastMiddleShift(string, char) {
  const middleIndex = Math.floor(string.length / 2);
  return string.substring(0, middleIndex) + char + string.substring(middleIndex);
}

expect(SlowMiddleShift('some', 'e')).to.equal('soeme');
expect(FastMiddleShift('some', 'e')).to.equal('soeme');
