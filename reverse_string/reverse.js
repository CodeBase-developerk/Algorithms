// Method: 1 
function reverse_string(str) {
  return str
    .split('')
    .reverse()
    .join('')
}

// Method: 2
function reverse_string(str) {
  let reversed = ''
  for (let char of str) {
    reversed = char + reversed
  }
  return reversed
}

// Method: 3
function reverse_string(str) {
  
}
