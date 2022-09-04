/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  /**
   * @type {number[][]}
   */
  const res = [];
  /**
   * @param {number[]} ans
   * @param {number} rest
   */
  const traversal = (ans, rest) => {
    if (rest === 0) {
      res.push(ans.slice());
      return;
    }

    for (let i = ans.length ? ans[ans.length - 1] - 1 : n; i >= rest; i--) {
      ans.push(i);
      traversal(ans, rest - 1);
      ans.pop();
    }
  };

  traversal([], k);
  return res;
};

// [
//   [2, 4],
//   [3, 4],
//   [2, 3],
//   [1, 2],
//   [1, 3],
//   [1, 4],
// ]
console.log(combine(4, 2));

// [[1]]
console.log(combine(1, 1));
