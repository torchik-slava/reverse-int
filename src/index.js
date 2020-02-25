module.exports = function reverse (n) {
  n > 0 ? n : n -= 2*n;
  return Number((''+n).split('').reverse().join(''));
}
