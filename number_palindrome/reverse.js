function is_num_palindrome(num) {
  let tmp = num
  let rev = 0
  while (tmp !== 0) {
    rev = rev * 10
    rev = rev + tmp % 10
    tmp = parseInt(tmp / 10)
  }
  return (num === rev) ? true : false
}
module.exports = is_num_palindrome
