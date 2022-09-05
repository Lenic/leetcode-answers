/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const value = Math.pow(n, 0.5);
  const integer = Math.floor(value);
  if (value === integer) return 1;

  /**
   * @type {number[]}
   */
  const values = new Array(n).fill(Infinity);
  for (let i = 0; i < integer; i++) {
    values[Math.pow(i + 1, 2) - 1] = 1;
  }

  for (let i = 1; i <= n; i++) {
    if (values[i] !== Infinity) continue;

    for (let j = i >> 1; j >= 0; j--) {
      const count = values[j] + values[i - j - 1];
      values[i] = Math.min(values[i], count);
    }
  }

  return values[values.length - 1];
};

// 3 (4 + 4 + 4)
console.log(numSquares(12));

// 4
console.log(numSquares(55));
