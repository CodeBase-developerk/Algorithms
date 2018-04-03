const is_num_palindrome = require('./reverse')
test('reverse the number', () => {
  expect(is_num_palindrome(12321)).toBe(true)
})
