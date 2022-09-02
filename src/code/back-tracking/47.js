/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((x, y) => x - y);

  /**
   * @type {number[][]}
   */
  const res = [];
  /**
   * @type {boolean[]}
   */
  const visited = new Array(nums.length).fill(false);
  /**
   * @param {number[]} ans
   * @param {number} left
   */
  const traversal = (ans, left) => {
    if (ans.length === nums.length) {
      res.push([...ans]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      /**
       * 主要分为两种情况：
       *
       * - 当前节点在遍历中则跳过
       * - 当前节点没有被遍历，并且和前一个节点的值相同时，需要判断前一个值是否处于『遍历中』状态，没有则跳过，保证相同的数字按顺序输出
       */
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
        continue;
      }

      ans.push(nums[i]);
      visited[i] = true;
      traversal(ans, left + 1);
      ans.pop();
      visited[i] = false;
    }
  };

  traversal([], 0);
  return res;
};

// [
//   [1, 1, 2],
//   [1, 2, 1],
//   [2, 1, 1],
// ];
console.log(permuteUnique([1, 1, 2]));
