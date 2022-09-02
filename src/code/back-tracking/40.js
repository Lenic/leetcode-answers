/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((x, y) => x - y);

  /**
   * @type {number[][]}
   */
  const res = [];
  /**
   * @param {number[]} ans
   * @param {number} prefixSum
   * @param {number} index
   */
  const traversal = (ans, prefixSum, index) => {
    if (prefixSum === target) {
      res.push([...ans]);
      return;
    }
    if (index >= candidates.length) return;

    for (let i = index; i < candidates.length; i++) {
      const nextSum = prefixSum + candidates[i];
      if (nextSum > target) {
        break;
      }

      ans.push(candidates[i]);
      traversal(ans, nextSum, i + 1);
      ans.pop();

      while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
        i += 1;
      }
    }
  };

  traversal([], 0, 0);
  return res;
};

// [
//   [1, 1, 6],
//   [1, 2, 5],
//   [1, 7],
//   [2, 6],
// ];
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

// [[1, 2, 2], [5]];
console.log(combinationSum2([2, 5, 2, 1, 2], 5));

// [[1, 1, 1, 1], [1, 1, 2], [2, 2]];
console.log(combinationSum2([1, 1, 1, 1, 2, 2, 2], 4));
