/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  /**
   * @type {number[][]}
   */
  const res = [];

  const n = nums.length;
  /**
   * @param {number[]} ans
   * @param {number} index
   */
  const traversal = (ans, index) => {
    if (index === n) {
      res.push(ans.slice());
      return;
    }

    ans.push(nums[index]);
    traversal(ans, index + 1);
    ans.pop();
    traversal(ans, index + 1);
  };

  traversal([], 0);
  return res;
};

// [[],[0]]
console.log(subsets([0]));

// [[],[1,2],[1],[2]]
console.log(subsets([1, 2]));

// [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([1, 2, 3]));
