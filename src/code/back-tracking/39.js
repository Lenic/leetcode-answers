/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
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

    for (let i = index; i < candidates.length; i++) {
      const nextSum = prefixSum + candidates[i];
      if (nextSum > target) {
        break;
      }

      ans.push(candidates[i]);
      traversal(ans, nextSum, i);
      ans.pop();
    }
  };

  traversal([], 0, 0);
  return res;
};

// [[2,2,3],[7]]
console.log(combinationSum([2, 3, 6, 7], 7));
