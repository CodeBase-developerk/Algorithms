// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {}
  let max = 0;
  let char = ''
  for (let i of str) {
    obj[i] = obj[i] + 1 || 1
  }
  for (let i in obj) {
    if (obj[i] > max) {
      max = obj[i]
      char = i
    }
  }
  return char
}

module.exports = maxChar;