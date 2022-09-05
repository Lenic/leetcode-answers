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
  for (let i = 0; i < integer; i++) {
    keys.push(Math.pow(i + 1, 2));
  }

  /**
   * @type {number}
   */
  let res = Infinity;

  /**
   * @param {number} ans
   * @param {number} rest
   */
  const traversal = (ans, rest) => {
    if (rest === 0) {
      res = Math.min(res, ans);
      return;
    }

    for (let key of keys) {
      if (key > rest) break;

      ans += 1;
      traversal(ans, rest - key);
      ans -= 1;
    }
  };

  traversal(0, n);
  return res;
};

// res(4 + 4 + 4)
console.log(numSquares(12));
