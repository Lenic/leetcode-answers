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
  const keys = [];
  /**
   * @type {number[]}
   */
  const values = new Array(n + 1).fill(Infinity);
  values[0] = 0;
  for (let i = 1; i <= integer; i++) {
    const square = Math.pow(i, 2);

    keys.push(square);
    values[square] = 1;
  }

  for (let i = 2; i <= n; i++) {
    if (values[i] !== Infinity) continue;

    let ans = Infinity;
    for (let key of keys) {
      const other = i - key;
      if (other < 0) break;

      ans = Math.min(ans, values[other]);
    }
    values[i] = ans + 1;
  }

  return values[values.length - 1];
};

// 3 (4 + 4 + 4)
console.log(numSquares(12));

// 4
console.log(numSquares(55));
